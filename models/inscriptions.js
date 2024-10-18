const {Schema, default:mongoose} = require ('mongoose');

const inscriptionSchema = new Schema({
    date_inscription: {
        type: Date,
        required: true
    },
    note: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model('inscription', inscriptionSchema);