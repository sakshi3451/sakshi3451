var express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const collection = require('../utils/mongoconnection').connection();
const collection2 = require('../utils/mongoConnection').adminMsgConnection();
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();


router.get('/login', function(req, res, next) {
  

  res.render('login',{error:null, loginStatus:false});
});

router.post('/login', async function(req, res, next) {
    const {email, password, loginType} = req.body;
    console.log(email,password,loginType);
    try {
        const data = await (await collection).findOne({email : email});
        const data1 = await (await collection).find().toArray();
        const adminMsgData = await (await collection2).find().toArray();
        console.log(adminMsgData);
        if (!data.email) 
        return res.status(400).send("email not found");

        if(data.password === password){
        if(req.body.loginType == 'user'){
        const token = jwt.sign({user : email}, 'nodejsExpressProject');
        console.log(token);

        res.cookie('loginCookie', token, {maxAge: 1000000});
        console.log('Cookies:', req.cookies.loginCookie);

        res.render('ShowData', {data:data1, loginStatus:true, adminMsgData:adminMsgData[1]});
        }else if(req.body.loginType == 'admin'){
          const token = jwt.sign({user : email}, 'nodejsExpressProject');
          console.log(token);
  
          res.cookie('loginCookie', token, {maxAge: 100000});
          console.log('Cookies:', req.cookies.loginCookie);
  
          res.render('welcomeAdmin', {data:data1, loginStatus:true});
        }
        //return;
        }else {
          return res.render('login',{error:'Incorrect credentials'});
        }
  } catch (err) {
    console.log(err);
    res.status(500).send("Login Failed");
  }
});
module.exports = router;


/*var express = require('express');
const { JsonWebTokenError } = require('jsonwebtoken');
const collection = require('../utils/mongoconnection').connection();
var router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.get('/login', function(req, res, next) {

  res.render('login',{error:null, loginStatus:false});
});
router.post('/login', async function(req, res, next) {
  const {email, password, loginType} = req.body;
  console.log(email,password,loginType);
  try {
      const data = await (await collection).findOne({email : email});
      const data1 = await (await collection).find().toArray();
      if (!data.email) 
      return res.status(400).send("email not found");

      if(data.password === password){
      if(req.body.loginType == 'user'){
      const token = jwt.sign({user : email}, 'nodejsExpressProject');
      console.log(token);

      res.cookie('loginCookie', token, {maxAge: 100000});
      console.log('Cookies:', req.cookies.loginCookie);

      res.render('ShowData', {data:data1, loginStatus:true});
      }else if(req.body.loginType == 'admin'){
        const token = jwt.sign({user : email}, 'nodejsExpressProject');
        console.log(token);

        res.cookie('loginCookie', token, {maxAge: 100000});
        console.log('Cookies:', req.cookies.loginCookie);

        res.render('welcomeAdmin', {data:data1, loginStatus:true});
      }
      //return;
      }else {
        return res.render('login',{error:'Incorrect credentials'});
      }
} catch (err) {
  console.log(err);
  res.status(500).send("Login Failed");
}
});
module.exports = router;*/

/*router.post('/login', async function(req, res, next) {
 const {email, password} = req.body;
 console.log(email,password,loginType);
  try {
  const data = await (await collection).findOne({email : email});
  const data1 = await (await collection).find().toArray();
  if (!data.email) 
  return res.status(400).send("email not found");
   if(data.password === password){
   
   const token = jwt.sign({user : email}, 'nodejsExpressProject');
  
   console.log(token);
  res.cookie('loginCookie', token, {maxAge: 100000});
 console.log('Cookies:', req.cookies.loginCookie);
   res.render('afterloginShowData', {data:data1, loginStatus:true})  
    }else {
    return res.render('login',{error:'Incorrect credentials'});
      }
  } catch (err) {
    console.log(err);
    res.status(500).send("Login Failed");
  }
});
module.exports = router;
*/


/*router.post('/login', async function(req, res, next) {
 const {email, password,} = req.body;
 console.log(email,password);
  try {
  const data = await (await collection).findOne({email : email});
  const data1 = await (await collection).find().toArray();
  if (!data.email) 
  return res.status(400).send("email not found");
   if(data.password === password){
   const token = jwt.sign({user : email}, 'nodejsExpressProject');
  
   console.log(token);
  res.cookie('loginCookie', token, {maxAge: 100000});
 console.log('Cookies:', req.cookies.loginCookie);
   res.render('afterloginShowData', {data:data1, loginStatus:true})  
    }else {
    return res.render('login',{error:'Incorrect credentials'});
      }
  } catch (err) {
    console.log(err);
    res.status(500).send("Login Failed");
  }
});
module.exports = router;
*/