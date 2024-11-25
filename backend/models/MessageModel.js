const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({

    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    recipient: {
        type: String,
        required: true
    }

}, { timestamps: true })

module.exports = mongoose.model('Message', messageSchema)