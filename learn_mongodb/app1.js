//SAVING DATA IN MONGODB

const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

//jab ham postman ya request sai data get karte hai tab ham 
//jo data hota hai vo ham convert kar lete hai taki vo data hame available ho jaye
app.use(express.json()); // postman ki post method wala data print krane kai lie we use this command
//REQUEST SAI BODY GET KARNE KAI LIE WE THIS 
//BODY PARSER WAS AN OLD CONCEPECT BEFORE EXPRESS 4.6 VER



app.get('/', async (req, res)=>{
    let data =  await dbConnect(); // data ko initialize kraya dbConnect sai
    data = await data.find().toArray();
   // console.log(data);
    res.send(data);
})

app.post('/', async (req,res) =>{  
    
    let data = await dbConnect();
    let result  = await data.insertOne(req.body)
    //to udpate we use put method
    //to delete we use delete method

    res.send(result);// jo api hame response degi
    console.log(req.body);

})
//ab yeh data req.body wale ko mongodb mai kaisi save karaye



app.listen(5000);