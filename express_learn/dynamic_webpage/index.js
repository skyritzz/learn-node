const express = require('express');
const app = express();//this helps in executing express package commands


app.get('',(req, res)=>{//it take two arguments
    console.log("data sent by browser---->", req.query);// this prints object
    console.log("data sent by browser---->", req.query.name);//this print value of name or key

    res.send("welcome to my page my name is "+req.query.name);//res matlab laake dena
    //sending the request to res 
})

app.get(('/about'),(req, res)=>{
    res.send("welcome to my about page");
});

app.get(('/help'),(req, res)=>{
    res.send("welcome to help page");
});


app.listen(5000);// we need a port to show the content