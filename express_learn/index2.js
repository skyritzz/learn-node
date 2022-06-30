//ROUTE LEVEL MIDDLEWARE
//SINGLE ROUTE
const express = require('express');
const app = express();
const reqfilter = require('./middleware');

app.get('/', reqfilter, (req, res)=>{ // adding reqfilter on that particular route
    res.send('welocme here')
});

app.get('/user', (req,res)=>{//here it will not ask for permission 
    //it will work normally
    res.send("heloo user");
})

app.get('/about', reqfilter, (req, res)=>{ // adding reqfilter on that particular route
    res.send('welocme here')
});

app.get('/contact', reqfilter, (req, res)=>{ 
    res.send('welocme here')
});


app.listen(5000);