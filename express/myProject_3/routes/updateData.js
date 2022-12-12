var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

/* GET users listing. */
router.get('/getDataToBeUpdated', async function(req, res, next) {
    const name = req.query.update;
    const data = await (await collection).findOne({name:name});
    res.render('showUpdateForm',{dataTobeUpdated:data});
});

router.post('/updateNewData', async function(req, res, next) {
    const postedData = req.body;
    console.log(postedData);
    console.log(postedData.college);
    try {
        const updateResult = await (await collection).updateOne({name:postedData.name}, {$set:{city:postedData.city,course:postedData.course, }});
        const data = await (await collection).find().toArray();
        res.render('showData', { data });
    }catch(err){
        console.error(err);
        res.status(500).send('Some Error in Insertion.');
    }
});
 
module.exports = router;
