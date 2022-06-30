//APPLICATION LEVEL MIDDLEWARE
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

app.use(reqfilter);



app.get('/', (req, res)=>{
    res.send('welcome my hommie');
})

app.get('/user', (req, res)=>{
    res.send("heloo users");
})

app.listen(5000);
