
const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;