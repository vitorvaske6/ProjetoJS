const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('Conexão padrão do mongoose está aberta')
})

db.on('error', err => {
    console.log(`Erro na conexão padrão Mongoose.\n${err}`)
})

db.on('disconnected', () => {
    console.log('Conexão padrão do mongoose está desconectada')
})

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Conexão padrão do Mongoose desconectada pelo fechamento da aplicação'
        )
        process.exit(0)
    })
})

const Clientes = require('./models/clientes')

const indexRoutes = require('./routes/index-routes')
app.use('/', indexRoutes)

const clientesRoutes = require('./routes/clientes-routes')
app.use('/clientes', clientesRoutes)

module.exports = app