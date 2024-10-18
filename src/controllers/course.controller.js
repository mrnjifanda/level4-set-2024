const Course = require('../models/Course');

const addCourse = async (req, res) => {
    const { name, description, category, duration, instructorId } = req.body;
    try {
        const course = new Course({ name, description, category, duration, instructorId });
        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const editCourse = async (req, res) => {
    const { name, description, category, duration } = req.body;
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, { name, description, category, duration }, { new: true });
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


const deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json({ message: 'Course deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};





module.exports = router;
