const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/personal-budget'));

app.get('/*',(req,res)=>{
    //res.sendFile(path.join(__dirname+'/personal-budget/index.html'));
    res.sendFile('index.html',{root:'./dist/personal-budget'});
});

app.listen(process.env.PORT || 8080);