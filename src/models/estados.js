const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    idEstado: {
        type: Number,
        required: true,
        unique:true,
        trim: true
    },
    descricao: {
        type: String,
        required: true,
        trim: true
    },
    sigla: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Estados', schema)