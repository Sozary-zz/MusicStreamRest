const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .use(
        bodyParser.urlencoded({
            extended: true,
        })
    )
    .use(express.json())
    .use(express.urlencoded())
    .get('/', (req, res) =>
        res.send({
            status: 200,
        })
    )
    .post('/speech_recognition', (req, res) => {
        res.send({
            request: req.body,
        })
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`))
