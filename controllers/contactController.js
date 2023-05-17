// Dependencies
const contactModel = require('../models/contactModel');

//@description: Get All Contacts
//@route: GET - /api/contacts
//@access: public
const getContacts = async (req, res) => {
  const contacts = await contactModel.find();
  res.status(200).json(contacts);
};

//@description: Create New Contact
//@route: POST - /api/contacts
//@access: public
const createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'All Fields are Mandatory!' });
    }

    const contact = await contactModel.create({
      name,
      email,
      phone,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@description: get Contact
//@route: GET - /api/contacts/:id
//@access: public
const getContact = async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact Not Found!' });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@description: Update Contact
//@route: PUT - /api/contacts/:id
//@access: public
const updateContact = async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact Not Found!' });
    }

    const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//@description: Delete Contact
//@route: DELETE - /api/contacts/:id
//@access: public
const deleteContact = async (req, res) => {
  try {
    const contact = await contactModel.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact Not Found!' });
    }

    await contactModel.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Contact Deleted Successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// exports
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
