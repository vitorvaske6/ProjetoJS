const mongoose = require('mongoose');
const Schema = mongoose.Schema


const schema = new Schema({
    idCliente:{
        type: Number,
        required: true,
        unique:true, 
        trim: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cnpj: {
        type: String,
        required: true,
        unique:true,
        trim: true
    }
})

module.exports = mongoose.model('Clientes', schema)