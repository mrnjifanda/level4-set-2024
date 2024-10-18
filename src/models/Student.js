const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  enrollments: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Enrollment'
  }]
});

module.exports = mongoose.model('Student', StudentSchema);
