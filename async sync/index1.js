//simple example of asuncronous programming
// answer of a+b is 10 not 20
//as console.log line is executing before 2000 sec
// ans it cant go back to execute the line where b = 20


let a = 10;
let b = 0;

setTimeout(()=>{
    b = 20;
},2000);

console.log(a+b);

//this problem of waiting for setTimeout can be handled with the help of PROMISE
