//this is final code for connect same as async await in file index2.js

//this code read data
const getConnect = require('./mongodb')

//this code is from index2.js file this will show all data of collection perfectly
const main = async ()=>{
    
    let data  = await getConnect();
    //data = data.find().toArray();//this will say promise pending 
    data = await data.find().toArray();
    console.log(data);
}
main();

// this code is from index1.js file this will also show all data of collection perfectly

// getConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.log(data);//this gives the data of dbase
//     })
// })

