const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname+'/dist/personal-budget'));

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/personal-budget/index.html'));
});

app.listen(8080);