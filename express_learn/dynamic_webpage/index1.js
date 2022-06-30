const express = require('express');
const app = express();//this helps in executing express package commands

//HTML RENDER 
//JSON FILE RENDER

app.get('',(req, res)=>{//it take two arguments
    res.send(`<h1>welcome to my page my name is</h1>
    <a href = "/about">GO TO ABOUT PAGE</a>
    `);//RENDERING html 
    //sending the request to res 
})

app.get(('/about'),(req, res)=>{
    //sending html on help page
    res.send(`
        <input type="text" placeholder="tom" value = ${req.query.name}>
        <button>click top gun</button><br>
        <br>
        <a href = "/">GO TO HOME PAGE</a>
    `);
});

app.get(('/help'),(req, res)=>{
    res.send([//sending json data on help page
        {
            name: "tom_Cruise",
            email: "fearless@real.com"
        },
        {
            name: "ethan_hunt",
            email: "fearless@MI7.com"
        }

    ]);
});


app.listen(5000);// we need a port to show the content