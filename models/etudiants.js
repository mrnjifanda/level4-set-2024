const {Schema, default:mongoose} = require ('mongoose');

const etudiantsSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true,
    },
    date_de_naissance: {
        type: Date,
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
    },
    adresse: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('etudiants', etudiantsSchema);