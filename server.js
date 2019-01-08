const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('static'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})
app.get('/caloriecounter', (req, res)=>{
    res.sendFile(path.join(__dirname + '/caloriecounter.html'))
})
app.get('/michael_choistagram', (req, res)=>{
    res.sendFile(path.join(__dirname + '/michael_choistagram.html'))
})
app.listen(8000, ()=>{
    console.log("Listen on 8000")
})