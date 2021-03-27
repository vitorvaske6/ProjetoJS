const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    cliente: {
        type: String,
        required: true,
        trim: true
    },
    logradouro: {
        type: String,
        required: true,
        trim: true
    },
    bairro: {
        type: String,
        required: true,
        trim: true
    },
    numero: {
        type: Number,
        required: true,
        trim: true
    },
    complemento: {
        type: String,
        required: false,
        trim: true
    },
    cidade: {
        type: String,
        required: true,
        trim: true
    },
    cep: {
        type: String,
        required: true,
        trim: true
    },
    estado: {
        type: String,
        required: true,
        trim: true
    },
    pais: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Enderecos', schema)