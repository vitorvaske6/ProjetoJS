const { validationResult } = require('express-validator')
const repository = require('../repositories/enderecos-repository')

exports.listEnderecos = async(req, res) => {
    try {
        const data = await repository.listEnderecos()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar enderecos.' })
    }
}

exports.findEnderecoById = async(req, res) => {
    const id = req.params._id
    try {
        const data = await repository.findEnderecoById(id)
        console.log(data)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar endereco.' })
    }
}

exports.findEnderecoByIdCliente = async(req, res) => {
    const id = req.params.id
    console.log(id)
    try {
        const data = await repository.findEnderecoByIdCliente(id)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar clientes.' })
    }
}

exports.findClienteById = async(req, res) => {
    const id = req.body.id
    try {
        const data = await repository.findClienteById(id)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar clientes.' })
    }
}

exports.createEndereco = async(req, res) => {
    const { errors } = validationResult(req)

    if (errors.length > 0) {
        return res.status(400).send({ messae: errors })
    }

    try {
        await repository.createEndereco({
            idEndereco: req.body.idEndereco,
            idCliente: req.body.idCliente,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            cidade: req.body.cidade,
            cep: req.body.cep,
            idEstado: req.body.idEstado,
            descricaoEstado: req.body.descricaoEstado,
            pais: req.body.pais
        })

        res.status(201).send({ message: 'Endereco cadastrado com sucesso.' })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar enderecos.' })
    }
}

exports.updateEndereco = async(req, res) => {

    const { errors } = validationResult(req)

    if (errors.length > 0) {
        return res.status(400).send({ messae: errors })
    }

    try {
        await repository.updateEndereco(req.params.id, req.body)
        res.status(200).send({
            message: 'Endereco atualizado'
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao atualizar endereco.' })
    }
}

exports.deleteEndereco = async(req, res) => {
    try {
        await repository.deleteEndereco(req.params.id)
        res.status(200).send({
            message: 'Endereco excluído com sucesso.'
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao excluir o endereco' })
    }
}