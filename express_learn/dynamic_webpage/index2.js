const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));



app.listen(5000);

//run in browser
//http://localhost:5000/about.html

//you get -->>>  "this is about page"

// now to not write .html in url we do smthing in index3.js file
