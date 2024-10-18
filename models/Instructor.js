const mongoose = require('mongoose');
const {Schema} = mongoose

const instructorSchema = new Schema({
    phone:{
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
},
{timeStamps:true}
)
module.exports = mongoose.model('Instructor', instructorSchema);
