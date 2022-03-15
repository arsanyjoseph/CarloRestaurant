const express = require('express');
const path = require('path');
const app = express();
const data = require('./data.json')

app.use("/", express.static(path.resolve(__dirname, 'build')));

app.get('/data', (req,res)=> {
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})


app.get('/*', (req,res)=> {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html' ))
})


app.listen(process.env.PORT || 5000, ()=> console.log(`Server is running on port ${process.env.PORT || 5000}`))
