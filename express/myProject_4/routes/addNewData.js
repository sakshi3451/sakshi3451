/*express=require('express')
var router= express.Router();
const sql = require('mssql')
const connObj=require('../utils/sqlConnection');

router.post("/addNewData",async function(req,res,next){
    const postedData = req.body;
    console.log(postedData);
    try{
    connObj.connection().then(async(pool)=>{
        const tablename='Clients';
  const result1 = await pool .request().query  
   console.dir(result1)
        res.render('showData',{data:result1});
    })
}
    catch(err){
        console.log(err)
    }
    });
    module.exports = router;*/