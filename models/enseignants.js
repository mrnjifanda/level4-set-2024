const {Schema, default:mongoose} = require ('mongoose');

const enseignantsSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true,
    },
    specialisation: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telephone: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('enseignants', enseignantsSchema);