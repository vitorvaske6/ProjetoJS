const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const clientesController = require('../controllers/clientes-controller')


router.get('/', clientesController.listClientes)

router.post('/', [
    check('nome').isLength({ min: 4 }).withMessage("O nome precisa ter ao menos 4 letras"),
    check('cnpj').isLength({ min: 14, max: 18 }).withMessage('CNPJ inválido'),
    check('endereco').isLength({ min: 5 }).withMessage('O endereço deve ter no mínimo 5 caracteres.')
], clientesController.createCliente)

router.put('/:id', [
    check('nome').isLength({ min: 4 }).withMessage("O nome precisa ter ao menos 4 letras"),
    check('cnpj').isLength({ min: 14, max: 18 }).withMessage('CNPJ inválido'),
    check('endereco').isLength({ min: 5 }).withMessage('O endereço deve ter no mínimo 5 caracteres.')
], clientesController.updateCliente)

router.delete('/:id', clientesController.deleteCliente)

module.exports = router