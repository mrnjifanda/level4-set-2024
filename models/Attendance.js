const mongoose = require('mongoose');
const {Schema} = mongoose

const attendaceSchema = new Schema({
    course_title:{
        type:String,
        required:true
    },
    duration:{
        type:Date(),
        required:true
    },
    category:{
        type:String,
        required:true
    },
},
{timeStamps:true}
)
module.exports = mongoose.model('Student', coursSchema);
