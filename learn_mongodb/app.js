const express = require('express');
const dbConnect = require('./mongodb');
const app = express();

//jab ham postman ya request sai data get karte hai tab ham 
//jo data hota hai vo ham convert kar lete hai taki vo data hame available ho jaye
app.use(express.json()); // postman ki post method wala data print krane kai lie we use this command


app.get('/', async (req, res)=>{
    let data =  await dbConnect(); // data ko initialize kraya dbConnect sai
    data = await data.find().toArray();
   // console.log(data);
    res.send(data);
})

app.post('/', (req,res) =>{  
    console.log(req.body);// yeh app.use(express.json()) karne kai baad hame data dekh sakte hai terminal mai
    ///postman sai data aane lga hai nodejs kai andar

    //res.send({name: "koila"});  this content shows when we send this post request
    res.send(req.body);

})
//ab yeh data req.body wale ko mongodb mai kaisi save karaye



app.listen(5000);