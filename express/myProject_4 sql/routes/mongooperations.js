var express = require('express');
const collection = require( '../utils/mongoconnection').connection();
const collection2 = require('../utils/mongoConnection').adminMsgConnection();
var router = express.Router();
router.get ('/getData',async function(req,res,next){
  const jwt = require('jsonwebtoken');
    
  //console.log(Object.keys(req.cookies).length);
 console.log('Cookies:', JSON.stringify(req.cookies));
  let loginStatus = false;
  if(Object.keys(req.cookies).length !==0){
  loginStatus = true;
    
    try{
    const dataVerify = jwt.verify(req.cookies.loginCookie, 'nodejsExpressProject');
  console.log("Verified Token:", dataVerify);
     const data = await (await collection).find().toArray();
     const adminMsgData = await (await collection2).find().toArray();
     console.log(adminMsgData);
     res.render('showData', { data, loginStatus, adminMsgData:adminMsgData[1]});
      }catch(err){
      console.log(err);
     return res.redirect('/login');
            }
        }else{
            res.redirect('/login');
        }
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
                    module.exports=router  
    
    
    
    
