const { validationResult } = require('express-validator')
const repository = require('../repositories/clientes-repository')


exports.listClientes = async (req, res) => {
    try {
        const data = await repository.listClientes()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar clientes.' })
    }
}

exports.createCliente = async (req, res) => {
    const { errors } = validationResult(req)

    if (errors.length > 0) {
        return res.status(400).send({ messae: errors })
    }

    try {
        await repository.createCliente({
            nome: req.body.nome,
            cnpj: req.body.cnpj,
            endereco: req.body.endereco
        })

        res.status(201).send({ message: 'Cliente cadastrado com sucesso.' })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar cliente.' })
    }
}

exports.updateCliente = async (req, res) => {

    const { errors } = validationResult(req)

    if (errors.length > 0) {
        return res.status(400).send({ messae: errors })
    }

    try {
        await repository.updateCliente(req.params.id, req.body)
        res.status(200).send({
            message: 'Cliente atualizado'
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao atualizar cliente.' })
    }
}

exports.deleteCliente = async (req, res) => {
    try {
        await repository.deleteCliente(req.params.id)
        res.status(200).send({
            message: 'Cliente excluído com sucesso.'
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao excluir o cliente' })
    }
}

