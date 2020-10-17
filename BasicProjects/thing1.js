const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send("HERRROOO!!!!")
})

app.get('/alien', function(req, res){
    res.send('Welcome Back Alien')
})

app.get('/alien/:id',function(req, res){
    const id = req.params.id
    res.send('Hey Ruslan ' + id)
})

app.listen(9000, function(req,res){
    console.log("Running")
})