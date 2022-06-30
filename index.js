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
//console.log(org_data);


//to rename the file
fs.renameSync("read.txt", "readwrite.txt");

fs.mkdirSync("wonder");
fs.writeFileSync('./wonder/"bio.txt"', "helo challenge");
