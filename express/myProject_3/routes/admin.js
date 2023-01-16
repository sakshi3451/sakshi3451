var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
const collection2 = require( '../utils/mongoconnection').adminMsgConnection();
var router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/welcomeAdmin', function(req, res, next) {
  console.log('Cookies:', JSON.stringify(req.cookies));
    let loginStatus = false;
    if(Object.keys(req.cookies).length !==0){
     loginStatus = true;

      try{
    const dataVerify = jwt.verify(req.cookies.loginCookie, 'nodejsExpressProject');
    console.log("Verified Token:", dataVerify);
    res.render('welcomeAdmin', {loginStatus:true});
     }catch(err){
     console.log(err);
     return res.redirect('/login');
    }
  }else{ 
    res.redirect('/login');
    }
  });  

router.post('/admin', async function(req, res, next) {
    const postedData = req.body;
       try{
     const AdminResult= await (await collection2).insertOne(postedData);
   // const data = await (await collection).find().toArray();
     res.redirect('/welcomeAdmin');
   
   }catch(err){
   res.status(500).send('enter message failed');
    }
});
module.exports = router;

/* GET users listing. 
router.get('/openForm',  function(req, res, next) {
  console.log('Cookies:', req.cookies);
    let loginStatus = false;
    if(req.cookies !== null || req.cookies !== undefined){
        loginStatus = true;
        res.render('showForm', {loginStatus:loginStatus});
    }else{
        res.redirect('/login');
    }
  //res.render('showForm');
});
router.post('/addNewData', async function(req, res, next) {
    const posteddata=req.body
    try{
        const insertResult = await ( await collection) .insertOne(posteddata);
        const data = await ( await collection) .find().toArray();
        res.render('showdata',{data});
      
       
}
catch(err){
res.status(500).send('some error in insertion');
}
    });
  
module.exports = router;*/