const mongoose = require('mongoose');
const { Schema } = mongoose;

const etudiantSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('user', etudiantSchema);