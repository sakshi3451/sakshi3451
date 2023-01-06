var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
var router = express.Router();

router.get ('/registrationForm', function(req,res,next){
    res.render('registrationForm');
});
router.post('/registrationForm',async function(req,res,next){
    const posteddata=req.body;
    try{
        const insertResult = await ( await collection) .insertOne(posteddata);
        const data = await ( await collection) .find().toArray();
        res.render('showdata',{data});
      // res.render('login',{data});
    
    }
    catch(err){
        res.status(500).send('some error is login');
    }
});
module.exports=router;

