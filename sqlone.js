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
// const result=await sql.query`insert into Clients values(221,'jain','pradeep','kasturbanagar','bhopal')`
// const result2= await sql.query`delete from Clients where first name='swati'`
// const result3= await sql.query`update Clients set city='indore'where ClientID=210 and firstname='shree'`
const result4= await sql.query`select*from sample`
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

