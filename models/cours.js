const {Schema, default:mongoose} = require ('mongoose');

const coursSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    categorie: {
        type: String,
        required: true,
    },
    duree: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('cours', coursSchema);