const sql = require('mssql');
const sqlconfiglocal= {
    user:'sakshi',
    passward:'sakshi@123',
    database:'nodejs-3',
    server:'localhost',
    options:{
        trustservercertificate:true
    },
    pool:{
        max:10,
        min:0,
        idletimeoutmillis:30000
    },
};
   const conn= async()=>{
    try{
await sql.connect(sqlconfiglocal)
const result= await sql.query`select*from Clients details`
return Promise.resolve(result);
    }catch(err){
        return Promise.reject(err);
    }
    };