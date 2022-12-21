var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
var router = express.Router();

router.get ('/signup', function(req,res,next){
    res.render('signup');
});


router.post('/signup',async function(req,res,next){
   const posteddata=req.body;
   try{
       const insertResult = await ( await collection) .insertOne(posteddata);
        const data = await ( await collection) .find().toArray();
        res.render('showdata',{data});
    }
    catch(err){
        res.status(500).send('some error is logout');
    }
});
module.exports=router;