var express = require('express');
const collection = require( '../utils/mongocollection').collection();
var router = express.Router();
router .get ('/getData',async function(req,res,next){
    //code here to connect  to Database and get the data from collection
    const data = await ( await collection) .find().toarray();
    res.render('showData',{data});
});
module.exports = router;