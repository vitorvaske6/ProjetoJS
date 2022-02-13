const { validationResult } = require('express-validator')
const repository = require('../repositories/estados-repository')

exports.listEstados = async (req, res) => {
    try {
        const data = await repository.listEstados()
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar estadoss.' })
    }
}

exports.createEstado = async (req, res) => {
    const { errors } = validationResult(req)

    if (errors.length > 0) {
        return res.status(400).send({ messae: errors })
    }

    try {
        await repository.createEstado({
            idEstado: req.body.idEstado,
            descricao: req.body.descricao,
            sigla: req.body.sigla
        })

        res.status(201).send({ message: 'Estado cadastrado com sucesso.' })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar estados.' })
    }
}

exports.updateEstado = async (req, res) => {

    const { errors } = validationResult(req)

    if (errors.length > 0) {
        return res.status(400).send({ messae: errors })
    }

    try {
        await repository.updateEstado(req.params.id, req.body)
        res.status(200).send({
            message: 'Estado atualizado'
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao atualizar estado.' })
    }
}

exports.deleteEstado = async (req, res) => {
    try {
        await repository.deleteEstado(req.params.id)
        res.status(200).send({
            message: 'Estado excluído com sucesso.'
        })
    } catch (e) {
        res.status(500).send({ message: 'Falha ao excluir o estado' })
    }
}

