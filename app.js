/*--- Create a Node Server ---*/
const path = require('path');

const cors = require('cors');
const PATH = process.env.PORT || 3000;

// import express.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');


const errorController = require('./controllers/error');
const User = require('./models/user');

// create app object.
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');



// const { connect } = require('http2');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({ secret: 'my secret', resave: false, saveUninitialized: false })
);


app.use((req, res, next) => {
    User.findById("61f0ea0e83e5b0fb4d12cfcb")
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);


app.use(errorController.get404);

const corsOptions = {
    origin: "https://cse341julioc.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    family: 4
};

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Admin:VTjyL1VchDYEddmH@cluster0.2xo0r.mongodb.net/shop?retryWrites=true&w=majority";

mongoose.connect(
    MONGODB_URL, options
)
    .then(result => {
        // This should be your user handling code implement following the course videos
        User.findOne().then(user => {
            if (!user) {
                const user = new User({
                    name: 'Julio',
                    email: 'julio@test.com',
                    cart: {
                        items: []
                    }
                });
                user.save();
            }
        });
        app.listen(PATH);
    })
    .catch(err => {
        console.log(err);
    });









// mongoose.connect('mongodb+srv://Admin:VTjyL1VchDYEddmH@cluster0.2xo0r.mongodb.net/shop?retryWrites=true&w=majority')
//     .then(result => {
//         User.findOne().then(user => {
//             if (!user) {
//                 const user = new User({
//                     name: 'Julio',
//                     email: 'julio@test.com',
//                     cart: {
//                         items: []
//                     }
//                 });
//                 user.save();
//             }
//         });
//         app.listen(PATH);
//     }).catch(err => {
//         console.log(err);
//     });







