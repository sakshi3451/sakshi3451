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
 const result=await sql.query`insert into Teacher1 values(305,'jain','pranav','kasturbanagar','bhopal','pranav@12345')`
 //const result2= await sql.query`delete from Teacher where first name='ravi'`
// const result3= await sql.query`update Teacher1 set city='indore'where TeacherId=301 and firstname='ravi'`
const result4= await sql.query`select*from Teacher1`
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


