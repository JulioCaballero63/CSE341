/*--- Create a Node Server ---*/

// import core modules.
const http = require('http');
const fs = require('fs'); 


// create server using an anonymous arrow function.
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        // this is an event listener. This is also a callback.
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // this is a second event listener. Added the return here so this block of code will run before the setHeader line.
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=') [1];
            // do not use .writeFileSync syntax to avoid blocking the execution of code after this file operation. Use .writeFile instead.
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

    // process.exit(); // this stops the port listener.
});

// create listener.
server.listen(3000); // 3000 means the port to listen for requests at.

