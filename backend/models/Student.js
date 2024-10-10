const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  progress: {
    alphabets: { type: Number, default: 0 }, // For tracking progress in alphabets
    maths: { type: Number, default: 0 },     // For tracking progress in maths
    listenAndRead: { type: Number, default: 0 }, // Progress in Listen and Read
  },
});

module.exports = mongoose.model('Student', studentSchema);
