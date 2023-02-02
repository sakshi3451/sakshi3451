var express=require('express')
var router= express.Router();
const sql = require('mssql')
const connObj=require('../utils/sqlConnection')
var cookieParser = require('cookie-parser');
router.use(cookieParser());
const jwt = require('jsonwebtoken');

var Json2csvParser = require('json2csv').Parser;
const fs = require('fs');
//const { routes } = require('../app');
const { error } = require('console');
var nodemailer=require('nodemailer');





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
     /*   {
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
*/



{
var mssql_data = JSON.parse(JSON.stringify(result.recordset));
        var file_header = ['ClientID', 'Lastname', 'Firstname', 'Address', 'City'];
        var json_data = new Json2csvParser({file_header});
        var csv_data = json_data.parse(mssql_data);
        fs.writeFileSync('./sample_data.csv',csv_data);
        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=sample_data.csv");
        res.status(200).end(csv_data);
        //res.render('dropData', {data:result.recordset});

       /* }else{
          res.send("Please check");
        }
    });
    }catch(err) {
        res.status(500).send('Error in Search Result');
    }

});

module.exports = router;*/


var sender=nodemailer.createTransport({
  service:'gmail',
  host:'smtp.gmail.com',
  port:465,
  secure:true,
  auth:{
    user:"sakshiJain6041@gmail.com",
    pass:'qqyyzjbwjhqlfkbe',
  },
});


var mail={
  from:"sakshijain6041@gmail.com",
  to:'sakshijain6041@gmail.com',
  subject:"sending Email using Node.js",
  text:" hii !",
  attachments:[
    {
      filename:'sample_data.csv',
      path:"D:/sakshi_practice/sakshi3451/express/myProject_4/sample_data.csv",
    }]
    }
    sender.sendMail(mail,function(error,info){
      if(error){
        console.log(error);
      }else{
        console.log("Email send successfully: " +info.response);
      }
    })
}
else{
  res.send("please select correct data");
}
    });
}catch(err) {
  console.log(error);

}
});

module.exports = router;

