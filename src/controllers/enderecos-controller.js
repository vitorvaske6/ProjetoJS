const { validationResult } = require('express-validator')
const repository = require('../repositories/enderecos-repository')

exports.listEnderecos = async (req, res) => {
    try {
        const data = await repository.listEnderecos()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar enderecos.' })
    }
}

exports.createEndereco = async (req, res) => {
    const { errors } = validationResult(req)

    if (errors.length > 0) {
        return res.status(400).send({ messae: errors })
    }

    try {
        await repository.createEndereco({
            cliente: req.body.cliente,
            logradouro: req.body.logradouro,
            bairro: req.body.bairro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            cidade: req.body.cidade,
            cep: req.body.cep,
            estado: req.body.estado,
            pais: req.body.pais
        })

        res.status(201).send({ message: 'Endereco cadastrado com sucesso.' })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar enderecos.' })
    }
}

exports.updateEndereco = async (req, res) => {

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

exports.deleteEndereco = async (req, res) => {
    try {
        await repository.deleteEndereco(req.params.id)
        res.status(200).send({
            message: 'Endereco excluído com sucesso.'
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao excluir o endereco' })
    }
}

