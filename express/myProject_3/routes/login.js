//const { urlencoded } = require('body-parser');
var express = require('express');
//const { check, validationResult } = require('express-validator');
const collection = require( '../utils/mongoconnection').connection();
var router = express.Router();

router.get ('/login', function(req,res,next){
    res.render('login');
});


router.post('/login',async function(req,res,next){
   const posteddata=req.body;
   try{
       const insertResult = await ( await collection) .insertOne(posteddata);
        const data = await ( await collection) .find().toArray();
        res.render('showdata',{data});
    }
    catch(err){
        res.status(500).send('some error is login');
    }
});
module.exports=router;