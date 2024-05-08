// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  grade: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Student', studentSchema);
