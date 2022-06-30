const http = require('http');
//handle req ans res from server

http.createServer((req, res)=>{
    res.write("<h1>hiii</h1>");//this will get displayed at localhost:4500
    res.end();
}).listen(4500);//this will run at lchost:4500


//ways one to pass function as a parameter
//way1
// function display(req, res)
// {
//     res.write("<h1>qhiii</h1>");
//     res.end();
// }
// http.createServer(display).listen(4500);

//way2
// const display = (req, res)=>
// {
//     res.write("<h1>qhi123ii</h1>");
//     res.end();
// }
// http.createServer(display).listen(4500);






