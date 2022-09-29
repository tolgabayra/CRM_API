const jwt = require("jsonwebtoken")
const CryptoJS = require("crypto-js");
const User = require("../models/User")


const register = async (req,res) => {
  const newUser = new User({
    username: req.body.username
  })
}

const login = async (req,res) => {
   try{

   }catch{

   }
}




module.exports = {
    login,
    register
}