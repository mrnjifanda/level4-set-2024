// routes/courseRoutes.js
const express = require('express');
const courseController = require('../src/controllers/course.controller');
const router = express.Router();


router.get('/', courseController.getAll)
router.post('/create', courseController.addCourse);
router.put('/update/:id', courseController.editCourse);
router.delete('/delete/:id', courseController.deleteCourse);

module.exports = router;
