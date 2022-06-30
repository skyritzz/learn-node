const fs = require('fs');

const path = require('path');
const { fileURLToPath } = require('url');

const dirPath = path.join(__dirname, 'crud')// folder  making
const filePath = `${dirPath}/tom.txt`;
// fs.writeFileSync(filePath, 'brilliant actor');


// fs.readFile(filePath, (err, item)=>{
//     console.log(item);
// })
//op is 
//<Buffer 62 72 69 6c 6c 69 61 6e 74 20 61 63 74 6f 72>
//this is temporary memory utilization//

//to read actual content of file we use 'utf8'


// fs.readFile(filePath, 'utf8',(err, item)=>{
//     console.log(item);
// })
// op is
// brilliant actor

// fs.appendFile(filePath, ' with good storyline',(err, item)=>{
//     if(!err) console.log("file updated");
// })

// fs.rename(filePath, `${dirPath}/tom_cruise.txt`,(err)=>{
//     if(!err) console.log("file remaned");
// } )

fs.unlinkSync( `${dirPath}/tom_cruise.txt`)
//file delted






