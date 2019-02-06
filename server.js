const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({        
        extended: true,
    })
)
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.send(
    {
        status:200
    }
))

app.post('/speech_recognition',(req,res)=>{
    res.send({
        request:req.body
    })
})

app.listen(port, () => console.log(`Running on port ${port}`))
