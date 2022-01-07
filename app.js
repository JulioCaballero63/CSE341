/*--- Create a Node Server ---*/

// import the http core module.
const http = require('http'); 


// create server using an anonymous arrow function.
const server = http.createServer((req, res) => {
    console.log(req);
});

// create listener.
server.listen(3000); // 3000 means the port to listen for requests at.

