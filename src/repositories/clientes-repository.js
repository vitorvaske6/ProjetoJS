const mongoose = require('mongoose')
const Clientes = mongoose.model('Clientes')

exports.listClientes = async () => {
    const res = await Clientes.find({}, 'nome cnpj endereco -_id')
    return res;
}

exports.findClienteById = async (id) =>{
    await Clientes.findById(id)
}

exports.createCliente = async data => {
    const cliente = new Clientes(data)
    await cliente.save()
}

exports.updateCliente = async (id, data) =>{
    await Clientes.findByIdAndUpdate(id, {
        $set: data
    })
}

exports.deleteCliente = async id =>{
    await Clientes.findByIdAndDelete(id)
}

