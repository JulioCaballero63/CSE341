/*--- Create a Node Server ---*/

// import core modules.
const http = require('http');

// import request handler function or other things from the request handler file.
const routes = require('./routes');

console.log(routes.someText);

// create server using an anonymous arrow function.
const server = http.createServer(routes.handler);

// create listener.
server.listen(3000); // 3000 means the port to listen for requests at.

