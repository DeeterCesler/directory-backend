const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
    name: ({type: String, required:true}),
    type: String,
    zip: ({type: String, required:true}),
})

module.exports = mongoose.model('Business', businessSchema);