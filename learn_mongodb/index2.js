//promise handling with async await function
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

//asyn await 

const main = async ()=>{
    
    let data  = await getConnect();;
    //data = data.find().toArray();//this will say promise pending 
    data = await data.find().toArray();
    console.log(data);
}
main();
//console.log(getConnect());