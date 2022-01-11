/*--- Create a Node Server ---*/

// import core modules.
const http = require('http');

const express = require('express');

const app = express();

// create server using an anonymous arrow function.
const server = http.createServer();

// create listener.
server.listen(3000); // 3000 means the port to listen for requests at.

