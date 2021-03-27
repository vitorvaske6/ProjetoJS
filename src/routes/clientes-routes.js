const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const clientesController = require('../controllers/clientes-controller')


router.get('/', clientesController.listClientes)

router.get('/:id', clientesController.findClienteById)

router.post('/', [
    check('nome').isLength({ min: 4 }).withMessage("O nome precisa ter ao menos 4 letras"),
    check('cnpj').isLength({ min: 14, max: 18 }).withMessage('CNPJ inválido'),

], clientesController.createCliente)

router.put('/:id', [
    check('nome').isLength({ min: 4 }).withMessage("O nome precisa ter ao menos 4 letras"),
    check('cnpj').isLength({ min: 14, max: 18 }).withMessage('CNPJ inválido'),
], clientesController.updateCliente)

router.delete('/:id', clientesController.deleteCliente)

module.exports = router