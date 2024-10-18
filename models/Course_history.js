const mongoose = require('mongoose');
const {Schema} = mongoose

const course_historySchema = new Schema({ 
    course: {
            courseId:{
                type:Schema.Types.ObjectId,
                ref:"Course",
                required:true
            }
        },
    
    student:{
            studentId:{
                type:Schema.Types.ObjectId,
                ref:"Student",
                required:true
            }
        }, 
},
{timeStamps:true}
)
module.exports = mongoose.model('Course_history', course_historySchema);
