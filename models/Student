const mongoose = require('mongoose');
const {Schema} = mongoose

const studentSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    course:[
        {
            courseId:{
                type:Schema.Types.ObjectId,
                ref:"Course",
                required:true
            }
        }
    ],
    attendace:[
        {
            attendaceId:{
                type:Schema.Types.ObjectId,
                ref:"Attendance",
                required:true
            }
        }
    ],
    course_history:[
        {
            courseId:{
                type:Schema.Types.ObjectId,
                ref:"Course_history",
                required:true
            }
        }
    ],
},
{timeStamps:true}
)
module.exports = mongoose.model('Student', userSchema);
