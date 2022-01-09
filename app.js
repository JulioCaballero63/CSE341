/*--- Create a Node Server ---*/

// import core modules.
const http = require('http');

// import request handler function.
const routes = require('./routes');

// create server using an anonymous arrow function.
const server = http.createServer(routes);

// create listener.
server.listen(3000); // 3000 means the port to listen for requests at.

