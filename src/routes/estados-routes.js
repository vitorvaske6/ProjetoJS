const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const estadosController = require('../controllers/estados-controller')


router.get('/', estadosController.listEstados)

router.post('/', [
    check('descricao').isLength({ min: 1 }).withMessage("Descricao precisa ter ao menos 1 letras"),
], estadosController.createEstado)

router.put('/:id', [
    check('descricao').isLength({ min: 1 }).withMessage("Descricao precisa ter ao menos 1 letras"),
], estadosController.updateEstado)

router.delete('/:id', estadosController.deleteEstado)

module.exports = router