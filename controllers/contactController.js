// Dependencies
const asyncHandler = require('express-async-handler');

//@description: Get All Contacts
//@route: GET - /api/contacts
//@access: public
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get All Contacts' });
});

//@description: Create New Contact
//@route: POST - /api/contacts
//@access: public
const createContact = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All Fields are Mandatory!');
  }
  res.status(201).json({ message: 'Create New Contact' });
});

//@description: get Contact
//@route: GET - /api/contacts/:id
//@access: public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact for ${req.params.id}` });
});

//@description: Update Contact
//@route: PUT - /api/contacts/:id
//@access: public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//@description: Delete Contact
//@route: DELETE - /api/contacts/:id
//@access: public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

// exports
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
