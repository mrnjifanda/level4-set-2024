// Controller (controllers/scheduleController.js)
const express = require('express');
const router = express.Router();


const Schedule = require('../models/Schedule');

module.exports.addSchedule = async (req, res) => {
    const { startTime, endTime, classroom } = req.body;
    try {
        const schedule = new Schedule({ courseId: req.params.courseId, startTime, endTime, classroom });
        await schedule.save();
        res.status(201).json(schedule);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};