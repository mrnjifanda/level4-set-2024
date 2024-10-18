const mongoose = require('mongoose');
const {Schema} = mongoose

const attendaceSchema = new Schema({
    course_title:{
        type:String,
        required:true
    },
    student:[
        {
            courseId:{
                type:Schema.Types.ObjectId,
                ref:"Student",
                required:true
            }
        }
    ],
    course:[
        {
            courseId:{
                type:Schema.Types.ObjectId,
                ref:"Course",
                required:true
            }
        }
    ],
},
{timeStamps:true}
)
module.exports = mongoose.model('Attendance', attendanceSchema);
