
const sql = require('mssql')

const sqlConfiglocal = {
    user: 'sakshijain',
    password: 'sakshi@123',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'nodejs_3',
options:{
    trustServerCertificate:true

},
pool:{
    max:10,
    min:0,
    idleTimeoutMillis:30000
        
},
};
const connection=async()=>{
   try{
    const pool=await sql.connect(sqlConfiglocal);
    return Promise.resolve(pool);
   }
   catch(err){
    return Promise.reject(err);
   }
   }
exports.connection=connection;