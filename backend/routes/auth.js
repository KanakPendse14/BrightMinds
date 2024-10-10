// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Teacher = require('../models/Teacher');
// const router = express.Router();

// // Teacher login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const teacher = await Teacher.findOne({ email });
//     if (!teacher) return res.status(400).json({ message: 'Invalid email or password' });

//     const isMatch = await bcrypt.compare(password, teacher.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

//     const token = jwt.sign({ id: teacher._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


// const bcrypt = require('bcrypt'); // For hashing passwords
// const Teacher = require('../models/Teacher'); // Import your Teacher model

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const teacher = await Teacher.findOne({ email });
//     if (!teacher) {
//       return res.status(400).json({ message: 'Teacher not found' });
//     }

//     const isMatch = await bcrypt.compare(password, teacher.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // You can use JWT for token generation here (optional)
//     return res.status(200).json({ message: 'Login successful', teacher });
//   } catch (error) {
//     return res.status(500).json({ message: 'Server error', error });
//   }
// });


// // routes/Auth.js
// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Teacher = require('../models/Teacher'); // Adjust this import as necessary
// const router = express.Router();

// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const teacher = await Teacher.findOne({ email });
//     if (!teacher) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     if (teacher.password !== password) {
//         return res.status(400).json({ message: 'Invalid email or password error type 2' });
//   }

//     // const isMatch = await bcrypt.compare(password, teacher.password);
//     // if (!isMatch) {
//     //   return res.status(400).json({ message: 'Invalid email or password' });
//     // }

//     const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// module.exports = router;


// // routes/Auth.js
// const express = require('express');
// const Teacher = require('../models/Teacher'); // Adjust this import as necessary
// const router = express.Router();

// // Login route
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if teacher exists
//     const teacher = await Teacher.findOne({ email });
//     if (!teacher) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Compare passwords (no hashing)
//     if (teacher.password !== password) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // If login is successful, you can generate a token or return success message
//     res.json({ message: 'Login successful', teacherId: teacher._id });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//   }
// });

// module.exports = router;


const express = require('express');
const Teacher = require('../models/Teacher'); // Adjust the import path if necessary
const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find teacher by email
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if the provided password matches the stored password
    if (teacher.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // (Optional) Generate a simple response upon successful login
    res.json({ message: 'Login successful', teacher: { name: teacher.name, email: teacher.email } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
