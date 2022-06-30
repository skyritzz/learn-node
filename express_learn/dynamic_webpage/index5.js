//usage of for loop in ejs

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');


//ejs is template 
//we  have to set app by app.set
//all ejs template are in 'views' folder it is a rule
app.set('view engine', 'ejs'); // using view engine 
//files in 'views' folder have extension .ejs


app.get('', (req, res)=>{
    res.sendFile(`${publicPath}/index.html`)//index.html is home page on its own
})

app.get('/profile', (req, res)=>{

    //res.render('profile');// this is used to show profile page at /profile url
    const user = {
        name: "tom",
        email: "tome@gun.com",
        skills: ["running", "flying", "swimming", "fighting"]
    }
    
    res.render('profile', {user});// from this we can enter name and email on profile page 
    // <%= %> //this is content shown within ejs template
    //<%= user.name %> is render on page profile.ejs
})

app.get('/login', (req, res)=>{
    res.render('login'); 
})

app.get('/help', (req, res)=>{
    res.sendFile(`${publicPath}/help.html`)
})

//if above /destinations does not typed then we use '*' FOR all other pages
app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/notFound.html`)
})




app.listen(5000);
