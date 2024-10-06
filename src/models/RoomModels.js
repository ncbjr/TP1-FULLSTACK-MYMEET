const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuidv4')

const roomSchema = new mongoose.Schema({
    _id :{
        type: String,
        default: uuidv4,
    }
});

module.exports = mongoose.model('room', roomSchema);