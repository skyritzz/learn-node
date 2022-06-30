//promise handling with .then function
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';
const database = 'movieApp';
const client = new MongoClient(url);

async function getConnect()
{
    let result = await client.connect();
    db = result.db(database);
    return db.collection('movies');
    // let response =  await collection.find({}).toArray();
    // console.log(response);
}

//jab bhi promise handle krna hota hai ham .then ka use karenge
//yeh pehle promise wale method sai sikha rha hai 
//phir yeh async await wale method sai sikhayega
getConnect().then((res)=>{
    // console.warn(res);// this gives unnecessary information 
    // console.warn(res.find().toArray())//this returns promise 
    //it return promise because toArray function also returns promise
    res.find().toArray().then((data)=>{
        console.log(data);//this gives the data of dbase
    })
})

//console.log(getConnect());