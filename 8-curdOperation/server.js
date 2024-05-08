// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/college_admission');

// Check if MongoDB is connected
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use('/api/students', studentRoutes);

app.get("/" , (req , res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
