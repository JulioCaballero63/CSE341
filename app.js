/*--- Create a Node Server ---*/

const path = require('path');

// import express.
const express = require('express');
const bodyParser = require('body-parser');

// create app object.
const app = express();

app.set('view engine', 'ejs'); // set as ejs to use ejs as the template view engine.
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

// create listener.
app.listen(3000); // 3000 means the port to listen for requests at.

