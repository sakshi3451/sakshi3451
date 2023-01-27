var express=require('express')
var router= express.Router();
const sql = require('mssql')
const connObj=require('../utils/sqlConnection')
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login',{error:null});
});

router.post('/login',async function (req,res,next){
  const {Email,password} = req.body;
  console.log(Email,password);
  try {
  connObj.connection().then(async(pool)=>{
  const result=await pool.request()
        .input('Email',sql.VarChar,Email)
        .input ('password',sql.VarChar,password)
        .query`select*from Clients where Email=@Email  and password =@password`;
        console.log(result.recordset[0]);

        if (result.recordset[0].Email===undefined)
        console.log("Email not found")

        if(result.recordset[0].password===password){
            const token=jwt.sign({user:Email},'cookie@123');
            res.cookie('cookies',token,{maxAge:60000});
            console.log(token);
            const resultOfClients=await pool.request()
            .query `select*from Clients`;
               
       res.render('loginData',{data:resultOfClients.recordset});
       return;
        }else{
            return res.render('login',{error:'incorrect credentials'});
        }     
        }).catch((error)=>{
            console.log(error);
            res.status(500).send('login fail');
        })
    }catch(err){
        res.status(500).send('login fail');
    }
    });
    module.exports=router;