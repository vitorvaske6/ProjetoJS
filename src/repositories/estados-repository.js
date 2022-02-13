const mongoose = require('mongoose')
const Estados = mongoose.model('Estados')

exports.listEstados = async () => {
    const res = await Estados.find({}, '_id idEstado descricao sigla')
    return res;
}

exports.createEstado = async data => {
    const estado = new Estados(data)
    await estado.save()
}

exports.updateEstado = async (id, data) =>{
    await Estados.findByIdAndUpdate(id, {
        $set: data
    })
}

exports.deleteEstado = async id =>{
    await Estados.findByIdAndDelete(id)
}
