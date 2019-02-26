const express = require('express')
const server = express()

server.use('/api', function(req, res, next) {
    console.log('inicio')
    next()
    console.log('fim')
})

server.use('/api', function(req, res) {
    console.log('resposta')
    res.send('API')
})

server.listen(3000, () => console.log('executando...'))