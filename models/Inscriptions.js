const mongoose = require('mongoose');
const { Schema } = mongoose;

const inscriptionSchema = new Schema({
    etudiant_name: {
        type: String,
        required: true
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

module.exports = mongoose.model('inscription', inscriptionSchema);