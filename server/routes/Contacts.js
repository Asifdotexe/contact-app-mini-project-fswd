const express = require('express');
const router = express.Router();
const Contact = require('../models/schema.js');

// Create a new contact
router.post('/', async (req, res) => {
  const { f_name, l_name, email, pno } = req.body;
  try {
    const information = new Contact({ f_name, l_name, email, pno });
    await information.save();
    res.status(201).json({ message: 'Information is inserted' });
  } catch (error) {
    res.status(500).json({ error: 'Error inserting information' });
  }
});

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Error getting contacts' });
  }
});

// Update a contact
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { f_name } = req.body;
  const { l_name } = req.body;
  const { email } = req.body;
  const { pno } = req.body;
  try {
    const result = await Contact.updateOne({ id }, { f_name }, { l_name }, { email }, { pno });
    res.status(200).json({ message: `Updated ${result.nModified} contact` });
  } catch (error) {
    res.status(500).json({ error: 'Error updating contact' });
  }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Contact.deleteOne({ id });
    res.status(200).json({ message: `${result.deletedCount} contact deleted` });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting contact' });
  }
});

module.exports = router;
