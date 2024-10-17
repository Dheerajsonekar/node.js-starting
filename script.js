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
const fs = require("fs");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    
    let messages = "";
    try {
      messages = fs.readFileSync("message.txt", "utf-8");
    } catch (err) {
      messages = "No message in file!";
    }

    res.write("<html>");
    res.write("<head><title>MY home page</title><head>");
    res.write("<body>");
    res.write(`<h3>Message:<pre>${messages}</pre></h3>`);
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form>')
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      
     
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>hi</title></head>");
  res.write("<body><h2>Lets work for the same</h2></body>");
  res.write("</html>");
  res.end();
});

server.listen(PORT, () => {
  console.log("Server is running on " + PORT + ".");
});
