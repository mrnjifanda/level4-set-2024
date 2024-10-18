const Course = require('../models/Course');

// Add new course
exports.addCourse = async (req, res) => {
  const { name, description, category, duration, schedule } = req.body;
  try {
    const course = new Course({ name, description, category, duration, schedule });
    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update course
exports.updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course updated successfully', updatedCourse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
