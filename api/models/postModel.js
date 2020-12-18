const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: {
        type: String,
        requried: true
    },
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);