const http = require('http');
const data = require('./data');// data imported here and used in line 11
// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'application\json'});
//     res.write(JSON.stringify({name: "TOM CRUISE", movie:"TOP GUNN 2"}));
//     res.end();
// }).listen(4500);

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'application\json'});// 200 is status code
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);