const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  label: { type: String, required: true }, // e.g., "Letter A"
  audio_data: { type: String, required: true }, // Base64 or Binary data
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Audio', audioSchema);
