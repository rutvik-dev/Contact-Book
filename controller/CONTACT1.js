const Contact = require('../model/CONTACT');

// Create a new contact
let CreateContact = async function (req, res, next) {
  try {

    const { name, phone, email, city ,userId} = req.body;
    const CreateContact = await Contact.create({ name, phone, email, city,userId});

    res.status(201).json({
      status: "success",
      message: 'Create Contact successfully',
      Data: CreateContact
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }
}

// Get all contacts
let GetAllContact = async function (req, res, next) {
  try {

    const contacts = await Contact.find().populate('userId')
    res.status(201).json({
      status: "success",
      message: 'Get All Contacts Successfully',
      Data: contacts
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }
}


// Get a single contact
let GetSingleContact = async function (req, res, next) {
  try {

    const contact = await Contact.findById(req.params.id).populate('userId');
    if (!contact) {
      res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(201).json({
      status: "success",
      message: 'Get Single Contact Successfully',
      Data: contact
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }
}

// Update a contact
let UpdateContact = async function (req, res, next) {
  try {

    const updatecontact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new:true}).populate('userId');
    if (!updatecontact) {
      res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(201).json({
      status: "success",
      message: 'Update Contact Successfully',
      Data: updatecontact
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }
}

// Delete a contact
let DeleteContact = async function (req, res, next) {
  try {

    const DeleteContact = await Contact.findByIdAndDelete(req.params.id);
    if (!DeleteContact) {
      res.status(404).json({ success: false, message: 'Contact not found' });
    }
    res.status(201).json({
      status: "success",
      message: 'Delete Contact Successfully',
      Data: DeleteContact
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message
    });
  }
}







module.exports = {CreateContact,GetAllContact,GetSingleContact,UpdateContact,DeleteContact}