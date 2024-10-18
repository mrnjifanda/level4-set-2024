const mongoose = require('mongoose');
const { Schema } = mongoose;

const horaireSchema = new Schema({
    cours_session: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: false,
        default: Date.now
    }
})

module.exports = mongoose.model('horaire', horaireSchema);