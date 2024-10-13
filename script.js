// const addTwoNumber = (a, b) => a+b;

// console.log(addTwoNumber(4, 7));

// const student = {
//     name:"Dheeraj",
//     class: "btech",
//     rollNO: 23,
//     passingYear: 2024
// }


// console.log(student);

// const fruits =  ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
// const newFruits = fruits.map(fruit=>{
//     if(fruit==' '){
//         return fruit = 'emptyString';
//     }
//     else{
//         return fruit;
//     }
// })

// console.log(newFruits);

// function printData(letter) {
//     return new Promise((resolve, reject)=> {
//       setTimeout(()=>{
//         console.log(letter)
//         resolve();
//       }, 1000)
//     })
// }

// async function printD(){
//     await printData('a');
//     await printData('b');
//     await printData('c');
//     await printData('d');
//     await printData('e');
    
// }

// printD();


const http = require('http');

const server = http.createServer((req, res)=>{
  console.log(req);
  res.end('successfull');
})

server.listen(4000, ()=>{
  console.log(" Hello Dheeraj sonekar! Server is running on the port 4000.");
})