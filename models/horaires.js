const {Schema, default:mongoose} = require ('mongoose');

const horaireSchema = new Schema({
    date_debut: {
        type: Date,
        required: true
    },
    date_fin: {
        type: Date,
        required: true,
    },
    salle: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('horaire', horaireSchema);