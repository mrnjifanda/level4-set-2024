const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  courses: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course'
  }]
});

module.exports = mongoose.model('Instructor', InstructorSchema);
