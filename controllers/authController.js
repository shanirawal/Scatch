const userModel = require('../models/user-model');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken');




module.exports.registerUser = async (req,res)=>{
    try{
        let {email, password , fullname} = req.body;

        let user= await userModel.findOne({email: email});
        if(user) return res.status(401).send("Already have an account , please Login!");

        bcrypt.genSalt(10 , (err,salt)=>{
            bcrypt.hash(password,salt,async (err,hash)=>{
                if(err) return res.send(err.message);
                else{
                    let user = await userModel.create({
                        email,
                        fullname,
                        password : hash,
                    });

                    let token = generateToken(user);
                    res.cookie("token",token);
                    
                    res.send("user created");
                }
            })
        })
        
    }
    catch(err){
        res.send(err.message);
    }
}

module.exports.loginUser =  async(req,res)=>{
    let {email , password} =req.body;

    let user =await userModel.findOne({email:email});
    if(!user) {
        res.flash("error","Email or Password Incorrect");
        return res.redirect("/");
    }
    bcrypt.compare(password , user.password , (err,result)=>{
        if(result){
            let token =generateToken(user);
            res.cookie("token",token);
            res.redirect("/shop");
        }
        else{
            res.flash("error","Email or Password Incorrect");
            return res.redirect("/");
        } 
    })
};

module.exports.logout=(req,res)=>{
    res.cookie("token","");
    res.redirect("/");
};