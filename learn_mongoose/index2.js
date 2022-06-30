const express = require('express');
require('./config');
const Movie = require('./movies');

const app = express();
app.use(express.json());

app.post("/create", async (req, res)=>{

    //yeh data aur result dono milkar data(jo hamne postman sai send karaya) usko database mai save kar rhih hai
    let data = new Movie(req.body);
    let result = await data.save();
    console.log(req.body);
    res.send(result);
})

app.get('/list', async (req, res)=>{
    let data = await Movie.find();//yeh hame sara data read krke dega database
    res.send(data);//yeh sara data return kr dega
})


app.delete('/delete', async(req,res)=>{
    console.log(req.params);
    let data = await Movie.deleteMany({title:"fata"})
    res.send(data);
})

app.delete('/delete/:_id', async(req,res)=>{
    console.log(req.params);//this method is used to delte by using param method
    let data = await Movie.deleteMany(req.params)
    res.send(data);
})

app.put('/update/:_id', async(req,res)=>{
    console.log(req.params);//this method is used to delte by using param method
    let data = await Movie.updateOne(
        req.params,
        { 
            $set: req.body
        }
        );
        //body only write that property that you want to update eg {"year": 54232} then in put url enter the id to update//then send //

    res.send(data);
})


app.listen(5000);