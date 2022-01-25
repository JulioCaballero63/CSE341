/*--- Create a Node Server ---*/
const path = require('path');
// const cors = require('cors');
const PATH = process.env.PORT || 3000;

// import express.
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;
const User = require('./models/user');

// create app object.
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    User.findById('5baa2528563f16379fc8a610')
        .then(user => {
            req.user = new User(user.name, user.email, user.cart, user._id);
            next();
        })
        .catch(err => console.log(err));

});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// app.listen(PATH);

mongoConnect(client => {
    console.log(client);
    app.listen(PATH);
});


// const corsOptions = {
//     origin: "https://cse341julioc.herokuapp.com/",
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     family: 4
// };

// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Admin:VTjyL1VchDYEddmH@cluster0.2xo0r.mongodb.net/shop?retryWrites=true&w=majority";



// mongoose
//     .connect(
//         MONGODB_URL, options
//     )
//     .then(result => {
//         // This should be your user handling code implement following the course videos
//         app.listen(PORT);
//     })
//     .catch(err => {
//         console.log(err);
//     });
