const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Adjust the path as necessary

// Get students by teacher email
router.get('/', async (req, res) => {
  const { teacherEmail } = req.query;
  try {
    const students = await Student.find({ teacherEmail }); // Assuming you have a Student model
    return res.status(200).json(students);
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
