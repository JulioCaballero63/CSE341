/*--- Create a Node Server ---*/

const path = require('path');

// import express.
const express = require('express');
const bodyParser = require('body-parser');

// create app object.
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// create listener.
app.listen(3000); // 3000 means the port to listen for requests at.

