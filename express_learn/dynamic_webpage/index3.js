const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

//app.use(express.static(publicPath));
app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`)// correct URL should be sent
})

app.get('/help', (req, res)=>{
    res.sendFile(`${publicPath}/help.html`)
})

//if above /destinations does not typed then we use '*' FOR all other pages
app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/notFound.html`)
})




app.listen(5000);
