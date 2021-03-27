const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const enderecosController = require('../controllers/enderecos-controller')


router.get('/', enderecosController.listEnderecos)

router.post('/', enderecosController.createEndereco)

router.put('/:id', [
    check('descricao').isLength({ min: 1 }).withMessage("Descricao precisa ter ao menos 1 letras"),
], enderecosController.updateEndereco)

router.delete('/:id', enderecosController.deleteEndereco)

module.exports = router