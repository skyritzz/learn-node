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


// {title: "killop"}, {$set:{title:"jeju"}} //this is static way of changing database
// {title: "killop"}, {$set:req.body} // this is dynamic way of changing database matlab hi ham postman mai jaake uski body mai type krke 
//update karte hai 
// {"title": req.params.name}, {$set:req.body}  //this is parametric way of updating data in databse
// isme ham agar name change karenge toh usrl ko set karenge '/:name'  fir postman kai url mai jaake original name type karenge aur
// updated name postman ki body mai set kar denge


//how to take data of query param
app.put('/:name', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {"title": req.params.name},
        {$set:req.body}
        )
    console.log(req.body);
    res.send(result);
})

//this is the data we want to update from "title" : "unfaithful" to "title" : "cyborg" 
// {
//     "title" : "cyborg",
//     "year": 2008,
//     "rating": "RA",
//     "score": 9.0
// }
// so we put tha orginal name in url of postman localhost:5000/unfaithful and then send 
//this url is working becoz of app.put('/:name'.... [/:name] this  and req.params.name




app.listen(5000);