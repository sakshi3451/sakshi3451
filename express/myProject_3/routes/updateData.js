var express = require('express');
const collection = require('../utils/mongoConnection').connection();
var router = express.Router();

/* GET users listing. */
router.put('/openUpdateForm', async function(req, res, next) {
    const name = req.body.update;
    const data = await (await collection).findOne({name:name});
    res.render('showUpdateForm',{dataTobeUpdated:data});
});

router.post('/addNewData', async function(req, res, next) {
    const postedData = req.body;
    try {
        const insertResult = collection.then(async collection=>{
        const data =  await collection.find().toArray();
        res.render('showData', { data });
    })
}
catch(err){
        console.error(err);
        res.status(500).send('Some Error in Insertion.');
    }
});

module.exports = router;
  
