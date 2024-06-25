const User = require('../model/USER');
var bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// JWT TOKEN //
var sequre = async function (req, res, next) {
    try {
        const token = req.headers.authorization
        if (!token) {
            throw new Error("Please Attach Token")
        }
        var decoded = jwt.verify(token, 'demo')

        req.userId = decoded.id
        userCheck = await User.findById(decoded.id)

        if (!userCheck) {
            throw new Error("User Not Found")
        }
        next()
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }

}

// SIGNUP USER //
let SignupUser = async function (req, res, next) {
    try {
        const { username, email, password , ContactId } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const CreateUser = await User.create({ username, email, password: hashedPassword , ContactId });

        res.status(201).json({
            status: "success",
            message: 'User Signup Registered Successfully',
            Data: CreateUser
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// LOGIN USER //
let Loginuser = async function (req, res, next) {
    try {

        var { email, password } = req.body;

        const find = await User.findOne({ email });


        if (!find) {
            throw new Error("USER IS NOT VALID")
        }

        const isMatch = await bcrypt.compare(password, find.password);

        if (!isMatch) {
            throw new Error("PASSWORD NOT VALID")
        }

        token = jwt.sign({ id: find._id }, 'demo')

        res.status(201).json({
            status: "success",
            message: 'User Login Registered Successfully',
            Data: find, token
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// READ ALL USER //
let ReadAllUser = async function (req, res, next) {
    try {

        const ReadUsers = await User.find().populate('ContactId');
        res.status(201).json({
            status: "success",
            message: 'User Read Successfully',
            Data: ReadUsers
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// READ SINGLE USER //
let ReadSingleUser = async function (req, res, next) {
    try {

        id = req.params.id

        const user = await User.findById(id).populate('ContactId');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(201).json({
            status: "success",
            message: 'User Read Successfully',
            Data: user
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// UPDATE USER //
let UpdateUser = async function (req, res, next) {
    try {

        id = req.params.id

        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true }).populate('ContactId');
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(201).json({
            status: "success",
            message: 'User Update Successfully',
            Data: updatedUser
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// DELETE USER //
let deleteUser = async function (req, res, next) {
    try {

        id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(201).json({
            status: "success",
            message: 'User Delete Successfully',
            Data: deletedUser
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

module.exports = { sequre, SignupUser, Loginuser, ReadAllUser, ReadSingleUser, UpdateUser, deleteUser }