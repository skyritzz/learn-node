//ROUTE LEVEL MIDDLEWARE
//SINGLE ROUTE
//ROUTER
const express = require('express');
const app = express();
const reqfilter = require('./middleware');
const route = express.Router();

route.use(reqfilter);

route.get('/', (req, res)=>{ // adding reqfilter on that particular route
    res.send('welocme here')
});

app.get('/user', (req,res)=>{//here it will not ask for permission 
    //it will work normally
    res.send("heloo user");
})

route.get('/about',  (req, res)=>{ // adding reqfilter on that particular route
    res.send('welocme about here')
});

route.get('/contact', (req, res)=>{ // adding reqfilter on that particular route
    res.send('welocme contact here')
});

app.get('/contact', reqfilter, (req, res)=>{ 
    res.send('welocme here')
});

app.use('/', route);
app.listen(5000);