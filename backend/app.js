
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json()); // To parse JSON request bodies
app.use(cors());

// Import authentication routes
const authRouter = require('./routes/auth'); // No need for default destructuring
const studentRouter = require('./routes/students'); 
// Use authentication routes under /api
app.use('/api', authRouter);
app.use('/api/students', studentRouter);

// MongoDB Atlas connection URL (Replace with your actual MongoDB Atlas URL)
const MONGODB_URI = 'mongodb+srv://kanakPendse14:kanak12345@littleheartschoolcluste.wnake.mongodb.net/LittleSchoolDB?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
