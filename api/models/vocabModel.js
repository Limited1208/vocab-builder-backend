const mongoose = require('mongoose');

const { Schema } = mongoose;

const vocabSchema = new Schema(
    {
        english: {
            type: String,
            required: 'English word cannot be blank'
        },
        german: {
            type: String,
            required: 'German word cannot be blank'
        },
        vietnamese: {
            type: String,
            required: 'Vietnamese word cannot be blank'
        },
    },
    {
        collection: 'vocab2'
    }
);

module.exports = mongoose.model('Vocab', vocabSchema);