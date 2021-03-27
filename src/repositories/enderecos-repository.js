const mongoose = require('mongoose')
const Enderecos = mongoose.model('Enderecos')

exports.listEnderecos = async () => {
    const res = await Enderecos.find({}, 'cliente logradouro bairro numero complemento cidade cep estado pais')
    return res;
}

exports.createEndereco = async data => {
    const endereco = new Enderecos(data)
    await endereco.save()
}

exports.updateEndereco = async (id, data) =>{
    await Enderecos.findByIdAndUpdate(id, {
        $set: data
    })
}

exports.deleteEndereco = async id =>{
    await Enderecos.findByIdAndDelete(id)
}