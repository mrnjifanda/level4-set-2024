const express = require('express');
const { addCourse, updateCourse, deleteCourse } = require('../src/controllers/course.controller');
const router = express.Router();

router.post('/', addCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
