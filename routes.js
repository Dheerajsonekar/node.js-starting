const fs = require("fs");


const requestHandler = (req, res) => {
    
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
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">submit</button></form>'
    );
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

   return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>hi</title></head>");
  res.write("<body><h2>Lets work for the same</h2></body>");
  res.write("</html>");
  res.end();
};


// module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler
// }

module.exports.handler = requestHandler;