const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/add', function(req, res) {
    let totalSum = Number(req.query.num1) + Number(req.query.num2)
    res.send(`The individual numbers are ${Number(req.query.num1)} & ${Number(req.query.num2)}, then the sum is ${totalSum}`)
})

app.post('/multiply', function(req,res) {
    // let payload = req.body
    let multiplyProduct = (req.body.num1 * req.body.num2)
    res.send(`The individual numbers are ${req.body.num1} & ${req.body.num2}, then the product is ${multiplyProduct}`)
})

app.put('/reciprocal/:num', function(req, res) {
    let reciprocal = 1 / req.params.num
    res.send(`The individual number is ${req.params.num} & the reciprocal is ${reciprocal}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`) 
 })