const mongoose = require('mongoose');
const {Schema} = mongoose

const scheduleSchema = new Schema({
    course_date:{
        type:String,
        required:true
    },
    start_time:{
        type:String,
        required:true
    },
    end_time: {
        type:String,
        required:true
    },
    course:{
            courseId:{
                type:Schema.Types.ObjectId,
                ref:"Course",
                required:true
            }
        },
},
{timeStamps:true}
)
module.exports = mongoose.model('Schedule', scheduleSchema);
