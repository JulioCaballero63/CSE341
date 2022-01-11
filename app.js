/*--- Create a Node Server ---*/

// import express.
const express = require('express');

// create app object.
const app = express();

app.use();

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {  
    res.send('<h1>Hello from Express!</h1>');
});

// create listener.
app.listen(3000); // 3000 means the port to listen for requests at.

