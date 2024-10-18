const mongoose = require('mongoose');
const { Schema } = mongoose;

const istructeurSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    cours: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('instructeur', istructeurSchema);