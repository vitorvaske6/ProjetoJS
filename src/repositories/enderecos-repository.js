const mongoose = require('mongoose')
const Enderecos = mongoose.model('Enderecos')

exports.listEnderecos = async() => {
    const res = await Enderecos.find({}, '_id idEndereco idCliente logradouro bairro numero complemento cidade cep idEstado descricaoEstado pais')
    return res;
}

exports.findEnderecoById = async(id) => {
    const res = await Enderecos.findById(id)
    return res;
}

exports.findEnderecoByIdCliente = async(id) => {
    const res = await Enderecos.find({ idCliente: id })
    return res;
}

exports.createEndereco = async data => {
    const endereco = new Enderecos(data)
    await endereco.save()
}

exports.updateEndereco = async(id, data) => {
    await Enderecos.findByIdAndUpdate(id, {
        $set: data
    })
}

exports.deleteEndereco = async id => {
    await Enderecos.findByIdAndDelete(id)
}