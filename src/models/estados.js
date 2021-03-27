const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    value: {
        type: Number,
        required: true,
        trim: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Estados', schema)