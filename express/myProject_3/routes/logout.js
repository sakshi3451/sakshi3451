
var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
var router = express.Router();

router.get ('/logout', function(req,res,next){
    res.render('logout');
});


router.post('/logout',async function(req,res,next){
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