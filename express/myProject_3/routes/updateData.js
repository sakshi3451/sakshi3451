var express = require('express');
const collection = require('../utils/mongoconnection').connection();
var router = express.Router();
const jwt = require('jsonwebtoken');
router.get('/getDataToBeUpdated', async function(req, res, next) {
    let loginStatus = false;
    if(Object.keys(req.cookies).length !==0){
     loginStatus = true;
   try{
  const dataVerify = jwt.verify(req.cookies.loginCookie, 'nodejsExpressProject');
   console.log("Verified Token:", dataVerify);
 const name = req.query.update;
   const data = await (await collection).findOne({Name:name});
  res.render('showUpdateForm',{dataTobeUpdated:data, loginStatus});
   }catch(err){
    console.log(err);
 return res.redirect('/login');
        }
    }else{
    res.redirect('/login');
    }  
    });

router.post('/updateNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(postedData.course);
    try {
  let loginStatus = false;
   if(Object.keys(req.cookies).length !==0){
  loginStatus = true;
 try{
const dataVerify = jwt.verify(req.cookies.loginCookie, 'nodejsExpressProject');
console.log("Verified Token:", dataVerify);
const updateResult = await (await collection).updateOne({name:postedData.name}, {$set:{city:postedData.city,course:postedData.course }});          
const data = await (await collection).find().toArray();
  res.render('showData', { data, loginStatus:true });
 }catch(err){
 console.log(err);
 return res.redirect('/login');
   }
 }
}catch(err){
console.error(err);
res.status(500).send('Some Error in Updation.');
    }
});

module.exports = router;


/* GET users listing. 
router.get('/getDataToBeUpdated', async function(req, res, next) {
    const name = req.query.update;
    const data = await (await collection).findOne({name:name});
    console.log('Cookies:', req.cookies);
    let loginStatus = false;
    if(req.cookies !== null || req.cookies !== undefined){
        loginStatus = true;
    }
    res.render('showUpdateForm',{dataTobeUpdated:data});
});
router.post('/updateNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(postedData.college);
    try {
        const updateResult = await (await collection).updateOne({name:postedData.name}, {$set:{city:postedData.city,course:postedData.course }});
        const data = await (await collection).find().toArray();
        res.render('showData', { data });
    }catch(err){
        console.error(err);
        res.status(500).send('Some Error in Insertion.');
    }
});
 
module.exports = router;*/