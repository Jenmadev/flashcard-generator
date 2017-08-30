var express = require('express')
var app = express();

app.get('/',function(req,res){
    res.send('Hello World!')
});

app.get('/blah', function(req,res){
    res.send('YESSSSSSSSSSSSSSSS!')
});

app.listen(3000,function(){
    console.log("Example app!")
});