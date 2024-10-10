// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const teacherSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// teacherSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     return next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });

// module.exports = mongoose.model('Teacher', teacherSchema);



const mongoose = require('mongoose');

// Define the teacher schema
const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Store password as plain text
});

// Create and export the Teacher model
module.exports = mongoose.model('Teacher', teacherSchema);
