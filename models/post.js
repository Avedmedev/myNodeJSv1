
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;