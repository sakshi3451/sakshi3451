var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
var router = express.Router();

router.get ('/login', function(req,res,next){
    res.render('login',{error:null});
});

router.post('/login', async function(req, res, next) {
    const {email, password} = req.body;
    console.log(email,password);
    try {
        const data = await (await collection).findOne({email : email});
        const data1 = await (await collection).find().toArray();
        if (!data.email) 
        return res.status(400).send("email not found");

        if(data.password === password){
          res.render('showdata', {data:data1});
          return;
        }else {
          return res.render('login',{error:'Incorect credentials'});
        }
  } catch (err) {
    console.log(err);
    res.status(500).send("login Failed");
  }
});
module.exports = router;

