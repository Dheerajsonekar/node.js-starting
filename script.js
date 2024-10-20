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

// const http = require('http');

// const server = http.createServer((req, res)=>{
//   console.log(req);
//   res.end('successfull');
// })

// server.listen(4000, ()=>{
//   console.log(" Hello Dheeraj sonekar! Server is running on the port 4000.");
// })

// const http = require('http');

// const server = http.createServer((req,res)=>{
//   res.setHeader('Content-Type', 'text/plain');

//   if(req.url=='/home'){
//     res.write('Welcome to home')
//   }
//   else if(req.url=='/About'){
//     res.write('Welcome to About us page')
//   }
//   else if(req.url=='/node'){
//     res.write('Welcome to my nodejs project')
//   }
//   else {
//     res.write('Welocome to this project')
//   }
//   res.end();
// })

// server.listen(3000);

const http = require("http");
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const PORT = 8000;

app.use(bodyParser.urlencoded({extended: true}));


app.use('/add-product', (req, res, next)=>{
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
  
})

app.use('/product', (req, res, next)=>{
  console.log(req.body);
  res.redirect('/');
})

app.use('/', (req, res, next)=>{
  res.send('<h1>Welcome to Expresjs project</h1>');
  
})

app.listen(PORT, () => {
  console.log("Server is running on " + PORT + ".");
});
