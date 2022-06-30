//const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const { clearScreenDown } = require('readline');

// const dirPath = path.join(__dirname);
// console.warn(dirPath);
// o/p D:\webb dev\learn node\input from cmd line

const dirPath = path.join(__dirname,'files');// entering files folder

// for(i = 0; i<5; i++)
// {
//     fs.writeFileSync(dirPath+"/tom cruise_"+ i + ".txt", "great movies forever");
// }

// fs.readdir(dirPath,(err, file)=>{
//     console.log(file);
// })
//op------>
// [
//   'tom cruise_0.txt',
//   'tom cruise_1.txt',
//   'tom cruise_2.txt',
//   'tom cruise_3.txt',
//   'tom cruise_4.txt'
// ]

fs.readdir(dirPath,(err, files)=>{
    files.forEach((item)=>{
            console.log("file name is ", item);
    })
})

//op is \\ op without array
// file name is  tom cruise_0.txt
// file name is  tom cruise_1.txt
// file name is  tom cruise_2.txt
// file name is  tom cruise_3.txt
// file name is  tom cruise_4.txt


