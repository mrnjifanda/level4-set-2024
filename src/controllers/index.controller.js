const express = require('express');
const Course = require('../models/Course');
const Student = require('../models/Student');

const router = express.Router();
const asyncHandler = (fn) => (req, res, next) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.post('/:courseId/students', asyncHandler(async (req, res) => {
    const { studentId } = req.body;

    const course = await Course.findById(req.params.courseId);
    if (!course) {
        return res.status(404).json({ message: 'Course not found' });
    }

    const student = await Student.findById(studentId);
    if (!student) {
        return res.status(404).json({ message: 'Student not found' });
    }

    if (course.students.includes(studentId)) {
        return res.status(400).json({ message: 'Student is already enrolled in this course.' });
    }

    course.students.push(studentId);
    student.enrolledCourses.push(course._id);

    await course.save();
    await student.save();

    res.status(200).json({ message: 'Student added to the course successfully.' });
}));

module.exports = router;

