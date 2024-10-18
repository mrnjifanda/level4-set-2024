const {Schema, default:mongoose} = require ('mongoose');

const salleSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    capacite: {
        type: String,
        required: true,
    },
    equipements: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('salle', salleSchema);