const express = require('express');
const router = express.Router();


const Enrollment = require('../models/Enrollment');
const Student = require('../models/Student');
const Course = require('../models/Course');

exports.addStudentToCourse = async (req, res) => {

    const { studentId, courseId } = req.body;
    try {
        const student = await Student.findById(studentId);
        const course = await Course.findById(courseId);

        if (!student || !course) {
            return res.status(404).json({ error: 'Student or Course not found' });
        }

        const enrollment = new Enrollment({ studentId, courseId });
        await enrollment.save();
        res.status(201).json(enrollment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


// module.exports = addStudentToCourse;
