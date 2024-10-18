const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const Student = require("../models/Student");

const enrollStudentInCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const existingEnrollment = await Enrollment.findOne({
      courseId,
      studentId,
    });
    if (existingEnrollment) {
      return res
        .status(400)
        .json({ error: "Student is already enrolled in this course" });
    }

    const enrollment = new Enrollment({
      courseId,
      studentId,
    });

    await enrollment.save();
    res.status(201).json({
      message: "Student successfully enrolled in the course",
      enrollment,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while enrolling the student" });
  }
};

module.exports = { enrollStudentInCourse };
