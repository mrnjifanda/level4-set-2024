const Student = require("../models/Student");

const addStudent = async (req, res) => {
  const { name, email } = req.body;
  try {
    const student = new Student({ name, email });
    await student.save();
    res
      .status(201)
      .json({ message: "Student created succesfully", student: student });
  } catch (error) {
    res.status(500).json({ error: "Error adding student" });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Error getting courses" });
  }
};
module.exports = {
  addStudent,
  getStudents,
};
