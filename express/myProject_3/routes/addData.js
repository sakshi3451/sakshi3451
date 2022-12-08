var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
var router = express.Router();

/* GET users listing. */
router.get('/openForm',  function(req, res, next) {
  res.render('showForm');
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
  

module.exports = router;