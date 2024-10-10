// const express = require('express');
// const Student = require('../models/Student');
// const router = express.Router();

// // Get students under a specific teacher
// router.get('/students/:teacherId', async (req, res) => {
//   const { teacherId } = req.params;
  
//   try {
//     const students = await Student.find({ teacher: teacherId });
//     res.json(students);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching students' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Student = require('../models/Student'); // Assuming you have a Student model

// API route to fetch students by teacher's email
router.get('/', async (req, res) => {
  const { teacherEmail } = req.query; // Get the teacher's email from query parameters
  
  try {
    // Assuming your Student model has a 'teacher.email' field to match the teacher's email
    const students = await Student.find({ 'teacher.email': teacherEmail });
    
    if (students.length > 0) {
      res.json(students); // Send the list of students
    } else {
      res.json([]); // Send an empty array if no students are found
    }
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Error fetching students', error });
  }
});

module.exports = router;

