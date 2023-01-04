var express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const collection = require('../utils/mongoconnection').connection();
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/login', function(req, res, next) {
  

  res.render('login',{error:null, loginStatus:false});
});


//router.get('/login', function(req, res, next) {
 // res.render('login',{error:null});
//});
//module.exports = router;

router.post('/login', async function(req, res, next) {
 const {email, password} = req.body;
 console.log(email,password);
  try {
  const data = await (await collection).findOne({email : email});
  const data1 = await (await collection).find().toArray();
  if (!data.email) 
  return res.status(400).send("email not found");
   if(data.password === password){
   const token = jwt.sign({user : email}, 'nodejsBatch3ExpressProject');
   console.log(token);

  // res.cookie('login', 'login Cookies');  
  res.cookie('loginCookie', token, {maxAge: 100000});
  console.log('Cookies:', req.cookies.loginCookie);

 /* try{
    const dataVerify = jwt.verify(tokenVerification, 'nodejsBatch3ExpressProject');
    req.email=dataVerify.email;
    req.password=dataVerify.password;
    return next();
    }catch(err){
      console.log(err);
    } */
   
  res.render('afterLoginShowData', {data:data1,loginStatus:true});
   return;
   }else {
   return res.render('login',{error:'Incorect credentials'});
   }
  } catch (err) {
 console.log(err);
  res.status(500).send("Login Failed");
  }
});
module.exports = router;