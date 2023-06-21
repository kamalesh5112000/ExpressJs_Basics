const express = require('express')

const app = express();

app.use((req,res,next)=>{
    console.log("in the middleware");
    next();

});
app.use((req,res,next)=>{
    console.log("in another middleware");
    res.send( { key1: 10 })

});

app.listen(3000);