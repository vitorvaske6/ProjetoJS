const mongoose = require('mongoose')
const Clientes = mongoose.model('Clientes')

exports.listClientes = async (req, res) => {
    try {
        const data = await Clientes.find({})
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar clientes.' })
    }
}

exports.createCliente = async (req, res) => {
    try {
        const cliente = new Clientes({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            endereco: req.body.endereco
        })

        console.log(cliente)

        await cliente.save()

        res.status(201).send({ message: 'Cliente cadastrado com sucesso!' })
    } catch (e){
        res.status(500).send({message: 'Falha ao cadastrar cliente.'})
    }
}