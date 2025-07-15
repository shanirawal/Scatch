const express= require("express");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");
const router = express.Router();

router.get("/",(req,res)=>{
    let error = req.flash("error");
    res.render("index", { error , loggedIn : false});
})

router.get("/shop",isLoggedIn,async (req,res)=>{
    let products = await productModel.find();
    let success = req.flash("success");
    res.render('shop',{products , success});
});

router.get("/cart",isLoggedIn,async (req,res)=>{
    let users = await userModel.findOne({email : req.user.email}).populate('cart');
    res.render('cart',{users});
});

router.get("/addtocart/:productid",isLoggedIn,async (req,res)=>{
    let user = await userModel.findOne({email : req.user.email});
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Product added to cart successfully!");
    res.redirect("/shop");
});

router.get("/logout",isLoggedIn,async (req,res)=>{
    res.render('shop');
});





module.exports= router;