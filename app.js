const express = require('express');
const app = express();
const  cookieparser = require('cookie-parser');
const path = require('path');
const usersRouter = require('./routes/usersRouter');
const ownersRouter = require('./routes/ownersRouter');
const productsRouter = require('./routes/productsRouter');

const db=require('./config/mongooose-connection');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname ,'public')));
app.use(cookieparser());
app.set('view engine','ejs');

app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);



app.listen(3000);