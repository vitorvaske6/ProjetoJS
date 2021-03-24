const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cnpj: {
        type: String,
        required: true,
        trim: true
    },
    endereco: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('Clientes', schema)