// routes/scheduleRoutes.js
const { Router } = require('express');
const router = Router();

const scheduleController = require('../src/controllers/schedule.controller');


router.post('/courses/:courseId/schedules', scheduleController.addSchedule);

module.exports = router;
