let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve(30);
    },2000)
})

//.then means phir
waitingData.then((data)=>{
    b = data;
    console.log(a+b);
})