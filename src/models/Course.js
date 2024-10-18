const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, required: true },
  duration: { type: Number, required: true }, // in hours
  schedule: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Schedule'
  }
});

module.exports = mongoose.model('Course', CourseSchema);
