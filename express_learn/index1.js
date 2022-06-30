//ROUTE LEVEL MIDDLEWARE
//SINGLE ROUTE
const express = require('express');
const app = express();

const reqfilter = (req, res, next)=>{
    if(!req.query.age)
    {
        res.send("plx provide age");
    }
    else if(req.query.age<18)
    {
        res.send("under age")// http://localhost:5000/user/?age=12
    }
    else
    next();
}


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


app.listen(5000);