const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Course',
    required: true
  },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  classroom: { type: String, required: true }
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
