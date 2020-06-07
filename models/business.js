const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: ({type: String, required:true}),
    type: ({type: String, required: true}),
    zip: ({type: String, required:true}),
    phoneNumber: String,
    address: String,
    description: String,
    website: String,
})

module.exports = mongoose.model('Business', businessSchema);