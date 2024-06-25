var Admin = require('../model/ADMIN')

// === CREATE ADMIN  ===
let createAdmin = async function (req, res, next) {
    try {
        const { username, email, password } = req.body;
        const CreateAdmin = await Admin.create({ username, email, password });

        res.status(201).json({
            status: "success",
            message: 'Admin registered successfully',
            Data: CreateAdmin
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}



// === GET ALL ADMINS ===
let getAllAdmins = async function (req, res, next) {
    try {
        const admins = await Admin.find();
        res.status(201).json({
            status: "success",
            message: 'Admin Get Successfully',
            Data: admins
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// === GET SINGLE ADMINS ===
let getSingleAdmins = async function (req, res, next) {
    try {
        const admin = await Admin.findById(req.params.id);
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(201).json({
            status: "success",
            message: 'Admin Get Successfully',
            Data: admin
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// === UPDATE ALL DATA ADMINS ===
let updateAdmin = async function (req, res, next) {
    try {
        id = req.params.id


        const updatedAdmin = await Admin.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }
        res.status(201).json({
            status: "success",
            message: 'Admin Update Successfully',
            Data: updatedAdmin
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// === DELETE ALL DATA ADMINS ===
let deleteAdmin = async function (req, res, next) {
    try {
        id = req.params.id

        const deletedAdmin = await Admin.findByIdAndDelete(id);
        if (!deletedAdmin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        res.status(201).json({
            status: "success",
            message: 'Admin Delete Successfully',
            Data: deletedAdmin
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


module.exports = {createAdmin,getAllAdmins,getSingleAdmins,updateAdmin,deleteAdmin}