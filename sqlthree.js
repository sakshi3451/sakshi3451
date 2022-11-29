const sql = require('mssql');
const sqlconfiglocal= {
    user:'sakshijain',
    password:'sakshi@123',
    database:'nodejs_3',
    server:'localhost',
    options:{
        trustServerCertificate:true
    },
    pool:{
        max:10,
        min:0,
        idleTimeoutMillis:30000
    },
};
   const conn= async()=>{
    try{
await sql.connect(sqlconfiglocal);
 const result2= await sql.query`delete from Teacher1 where Firstname='ravi'`
const result3=await sql.query`update Teacher1 set Address='rachnanagar' where TeacherId=305 and Firstname='ravi'`
const result4= await sql.query`select*from Teacher1`
//const result5=await sql.query`select*from Teacher1 where Firstname Like 'y%'`
return Promise.resolve(result4);
    }
    
catch(err){
    return Promise.reject(err);
}
    };
    conn().then(result=>{
        console.log(`result is:${JSON.stringify(result)}`);
    }).catch(err=>{
        console.log(`In error:${err}`);
    });

