const Course = require('../../models/Course')

const getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id)
        if (!course) return res.status(404).send('Course not found.')
        res.send(course)
    } catch (error) {
        res.status(500).send('Server error.')
    }
}
const createOne = async (req, res) => {
    try {
        const course = new Course(req.body)
        await course.save()
        res.status(201).send(course)
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).send(error.errors)
        } else {
            res.status(500).send('Server error.')
        }
    }
}
const updateOne = async (req, res) => {
    try { 
        const course = await Course.findByIdAndUpdate(req.params.id, req.body)
        if (!course) return res.status(404).send('Course not found.')
        res.send(course)
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).send(error.errors)
        } else {
            res.status(500).send('Server error.')
        }
    }
}
const deleteOne = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id)
        if (!course) return res.status(404).send('Course not found.')
        res.send(course)
    } catch (error) {
        res.status(500).send('Server error.')
    }
}

module.exports = {
    getCourse,
    createOne,
    updateOne,
    deleteOne,
}