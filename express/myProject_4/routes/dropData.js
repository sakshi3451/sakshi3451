var express=require('express')
var router= express.Router();
const sql = require('mssql')
const connObj=require('../utils/sqlConnection')
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');


router.get('/dropData', function(req,res,next){
    res.render('dropData',{error:null});
});


router.post('/dropData',async function (req,res,next)
{
    const {Address,City}= req.body; 
    console.log(Address,City);
  try {
    connObj.connection().then(async (pool)=> {
        const result = await pool.request()
        .input('Address', sql.VarChar, Address)
        .input('City', sql.VarChar, City)
        .query `select * from Clients where Address = @Address and City = @City`;
        console.log(result.recordset[0].Address , result.recordset[0].City);
        console.log(result);
        if(result.recordset !== null && result.recordset !== undefined)
        {
          // console.log(result.recordset[0].Address , result.recordset[0].City)
          res.render('dropData',{data:result.recordset});
       }
        else
        {
          res.send ("Please select correct data");
        }
    }).catch((err) =>
    {
          console.log(err);
    })
}catch(err)
    {
     console.log(err)   
    }
})

module.exports = router ;