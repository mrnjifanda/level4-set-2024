const Course = require("../models/Course");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Error getting courses" });
  }
};

const addCourse = async (req, res) => {
  const { name, category, duration } = req.body;
  try {
    const course = new Course({ name, category, duration });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: "Error adding course" });
  }
};

const updateCourse = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const course = await Course.findByIdAndUpdate(id, { ...body });
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: "Error updating course" });
  }
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByIdAndDelete(id);
    if (course) {
      res.json({ message: "Course deleted" });
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting course" });
  }
};

module.exports = {
  addCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};
