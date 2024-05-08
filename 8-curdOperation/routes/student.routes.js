// routes/students.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student.models');

// Create a new student record
router.post('/', async (req, res) => {
  // try {
  //   const student = await Student.create(req.body);
  //   res.status(201).json(student);
  // } catch (err) {
  //   res.status(500).json({ error: err.message });
  // }
  res.send("hello world")
});

// Retrieve all student records
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an existing student record
router.put('/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a student record
router.delete('/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
