const mongoose = require('mongoose');
const express =require("express");
const upload = require("../config/multer-config");
const router = express.Router();
const productModel = require('../models/product-model');


router.post("/create",upload.single('image'),async (req,res)=>{
    try{
    let { name, price, discount, bgcolor, panelcolor, textcolor } =req.body;

    let product = await productModel.create({
        image : req.file.buffer,
        name,
        price,
       discount,
       panelcolor,
       bgcolor,
       textcolor,   
    });

    req.flash("success","Product Created");
    res.redirect("/owners/admin");
    }catch(err){
        res.send(err.message);
    }
})

 
module.exports= router;