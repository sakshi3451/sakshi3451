var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
var router = express.Router();
router.get ('/getData',async function(req,res,next){

   //  res.send('test');
    const data = await ( await collection) .find().toArray();
    res.render('showdata',{data});

});

router.get ('/getspecificdata',async function(req,res,next){
    const querydata=req.query;
    const data = await ( await collection) .find({city:querydata.city,course:querydata.course}).toArray();
    res.render('showdata',{data});
});
    
router.get ('/getdatabyparam/:course',async function(req,res,next){
    const paramdata=req.params;
    const data = await ( await collection) .find({city:paramdata.param,course:paramdata.course}).toArray();
    res.render('showdata',{data});
});
        
router.get ('/getdatabyparam/:name/:city',async function(req,res,next){
    const paramdata=req.params;
    const data = await ( await collection) .find({city:paramdata.city,name:paramdata.name}).toArray();
    res.render('showdata',{data});
});
            
    
            router.post('/addData',async function(req,res,next){
                const posteddata=req.body;
                    const insertResult = await ( await collection) .insertOne(posteddata);
                    const data = await ( await collection) .find().toArray();
                    res.render('showdata',{data});
                });
                
          
router.put('/updateData',async function(req,res,next){
    const updateData=req.body;
    try{
        const updateResult = await ( await collection) .updateOne({name:updateData.name},{$set:{city:updateData.city,course:updateData.course}});
        const data = await ( await collection) .find().toArray();
        res.render('showdata',{data});
    }
    catch(err){
        res.status(500).send('some error is update');
    }
});



                    router.delete('/deleteData',async function(req,res,next){
                        const deleteData=req.body;
             try{
                            const deleteResult = await ( await collection) .deleteOne({name:deleteData.name});
                            const data = await ( await collection) .find().toArray();
                            res.render('showdata',{data});
             }
            catch(err){
                res.status(500).send('some error is delete');
            }
                        });
                    module.exports=router;
    
    
    
    
