

const create = async (req, res, next)=>{ 
    const {course_title, duration, category } = req.body

    if(!course_title || !duration || !category){
        return res.status(400).json({error: "All fields are required"})
    }
    next()
} 

module.exports = {create}