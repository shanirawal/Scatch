const express = require('express');
const app = express();
const  cookieparser = require('cookie-parser');
const path = require('path');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');
const indexRouter = require('./routes/index');
const session = require('express-session');
const flash = require('connect-flash');

require("dotenv").config();

const db=require('./config/mongooose-connection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,'public')));
app.use(cookieparser());
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.set('view engine','ejs');



app.use("/",indexRouter);
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);



app.listen(3000);