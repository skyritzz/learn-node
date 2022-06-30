//SEARCH API 
//HERE WE CAN SEARCH FOR DATA WITH KEYWORDS IN URL
//FOR EXAMPLEA FOR ALL RATING "U" I WILL GET THE DESIRED RESULT
//NO NEED TO SEARCH WITH ID 
//INSTEAD IT KEYWORD CAN BE USED TO SEARCH DATA

const express = require('express');
require('./config');
const Movie = require('./movies');

const app = express();
app.use(express.json());

app.get('/search/:key', async(req, res)=>{
    console.log(req.params.key);
    let data  = await Movie.find(
        {
            "$or":[
                { "rating":{$regex:req.params.key} },
                { "title": {$regex:req.params.key} }
            //"?????????????" DONT KNOW HOW TO SEARCH USING NUMBER 
            //ERROR IS ENCOUNTERED WHENEVER I SEARCH WITH PROPERTY OF YEAR
            //{ "year": {$regex:req.params.key} } /// IT DOES NOT WORK
            ]
        }
    )
    res.send(data);
})


app.listen(5000);