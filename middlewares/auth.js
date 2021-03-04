<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async(req, res, next) =>
{
    try{
        const authToken = req.header('authorization').replace('Bearer', '');
        const decoded = jwt.verify(authToken, "thisisuserverification");
        const user = await User.findOne({
            _id: decoded._id, 'tokens.token': token 
        })
        if(!user) {
            throw new Error('Please Authenticate');
        }
        req.user = user;
        req.token = authToken;
        next();
    }
    catch(error){
        res.status(400).send({error: 'Please Authenticate'});
=======
const User = require("../models/user");
const jwt = require("jsonwebtoken");
//AUTHENTICATION MIDDLEWARE
const auth = async (req, res, next) => {
  try {
    const token = req.header("authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "thisisuserverification");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });
    if (!user) {
      throw new Error("Please Authenticate");
>>>>>>> c85b2bc4b901199ff14853ce947264702a4086c1
    }
    req.user = user;
    req.token = token;
    next();
  } catch (e) {
    res.status(400).send({ error: "Please Authenticate" });
  }
};

module.exports = auth;
