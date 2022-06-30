//delete method

//SAVING DATA IN MONGODB

const express = require('express');
//const { MongoDBNamespace } = require('mongodb');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

//jab ham postman ya request sai data get karte hai tab ham 
//jo data hota hai vo ham convert kar lete hai taki vo data hame available ho jaye
app.use(express.json()); // postman ki post method wala data print krane kai lie we use this command
//REQUEST SAI BODY GET KARNE KAI LIE WE THIS 
//BODY PARSER WAS AN OLD CONCEPECT BEFORE EXPRESS 4.6 VER



app.get('/', async (req, res)=>{
    let data =  await dbConnect(); // data ko initialize kraya dbConnect sai
    data = await data.find().toArray();
    res.send(data);
})

app.post('/', async (req,res) =>{  
    
    let data = await dbConnect();
    let result  = await data.insertOne(req.body)
    res.send(result);// jo api hame response degi
    console.log(req.body);

})

//to update data from postman
app.put('/', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {title: req.body.name},
        {$set:req.body}//{$set:req.body}// ya to yha sai directly set krlo nhi toh seedha postman ka use kro uski body mai content liko sur send krdo 
        )//with req.body kyko jo uski body mai hai vo aa jayega

    console.log(req.body);
    res.send(result);
})

app.delete("/:id", async (req, res)=>{

    console.log(req.params.id);
    const data  = await dbConnect();
    const result = await data.deleteOne(
        {_id: new mongodb.ObjectId(req.params.id)}
        )
    res.send(result);

})


app.listen(5000);