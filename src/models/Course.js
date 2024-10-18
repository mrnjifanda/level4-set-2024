const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    description:
    {
        type: String,
        required: true
    },

    category:
    {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    duration:
    {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);
