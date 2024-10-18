const mongoose = require('mongoose');
const {Schema} = mongoose

const classroomSchema = new Schema({ 
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
module.exports = mongoose.model('Classroom', classroomSchema);
