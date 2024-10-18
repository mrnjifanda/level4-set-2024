const mongoose = require('mongoose');
const { Schema } = mongoose;

const coursSchema = new Schema({
    detail: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true,
        unique: true
    },
    duree: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('cours', coursSchema);