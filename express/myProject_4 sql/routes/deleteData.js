var express = require('express');
var router = express.Router();
const collection = require('../utils/mongoConnection').connection();
const jwt = require('jsonwebtoken');

router.get('/deleteData', async function(req, res, next) {
    const name = req.query.Name;
        let loginStatus = false;
        if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
        const dataVerify = jwt.verify(req.cookies.loginCookie, 'nodejsExpressProject');
        console.log("Verified Token:", dataVerify);
        const deleteResult = await (await collection).deleteOne({Name:name});
        const data = await (await collection).find().toArray();
        res.render('showData', { data, loginStatus });
        }catch(err){
        console.log(err);
        return res.redirect('/login');
        }
        }else{
            res.redirect('/login');
        }
});

module.exports = router;

/* GET home page. 
router.get('/deleteData', async function(req, res, next) {
    const name= req.query.name;
    try{
    const deleteResult = await (await collection).deleteOne({name});
    const data = await (await collection).find().toArray();
    console.log('Cookies:', req.cookies);
        let loginStatus = false;
        if(req.cookies !== null || req.cookies !== undefined)
        {
            loginStatus = true;
        }
    res.render('showData', { data ,loginStatus });
    
    } catch(error){
        console.error(err);
        res.status(500).send('Some Error in Delete operation');
    }
  
});
module.exports = router;*/













/*router.get('/deleteData', async function(req, res, next) {
    const name = req.query.Name;
        let loginStatus = false;
        if(Object.keys(req.cookies).length !==0){
        loginStatus = true;
        try{
        const dataVerify = jwt.verify(req.cookies.loginCookie, 'nodejsExpressProject');
        console.log("Verified Token:", dataVerify);
        const deleteResult = await (await collection).deleteOne({Name:name});
        const data = await (await collection).find().toArray();
        res.render('showData', { data, loginStatus });
        }catch(err){
        console.log(err);
        return res.redirect('/login');
        }
        }else{
            res.redirect('/login');
        }
});

module.exports = router;

 GET home page. 
router.get('/deleteData', async function(req, res, next) {
    const name= req.query.name;
    try{
    const deleteResult = await (await collection).deleteOne({name});
    const data = await (await collection).find().toArray();
    console.log('Cookies:', req.cookies);
        let loginStatus = false;
        if(req.cookies !== null || req.cookies !== undefined)
        {
            loginStatus = true;
        }
    res.render('showData', { data ,loginStatus });
    
    } catch(error){
        console.error(err);
        res.status(500).send('Some Error in Delete operation');
    }
  
});

module.exports = router;*/


