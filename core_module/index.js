const fs = require("fs")

//this function make new file and write the content
fs.writeFileSync("read.txt", "this is a text");
//this overwrite the alreay written file
fs.writeFileSync("read.txt", "pathetic one");
//this add the more content on same file
fs.appendFileSync("read.txt", "   not really");


//fs.readFileSync("read.txt");
const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);
//output
//<Buffer 70 61 74 68 65 74 69 63 20 6f 6e 65 20 20 20 6e 6f 74 20 72 65 61 6c 6c 79>
//this buffer 
// node.js had additional data type which is buffer
// not in js
// mainly used to store binary data
// while reading from a file or recieving packets over the network


//to get exact content we use
const buf_data1 = fs.readFileSync("read.txt");
org_data = buf_data1.toString();
console.log(org_data);


//to rename the file
fs.renameSync("read.txt", "readwrite.txt");


//known modules, need to be reqiured like in line 34
const fs = require('fs');
fs.writeFileSync("heel34o.txt", "pracising node js");// this will create a file [heel34o.txt] and content is also inserted// this will execute when ----> node .\index.js wil run // file created

const fs = require('fs');
console.log(__dirname);//this return name of current directory run cmd-->[node .\index.js] ret value [D:\webb dev\learn node\core modules]
console.log("(---->>>)",__dirname);// modified name //(---->>>) D:\webb dev\learn node\core modules


