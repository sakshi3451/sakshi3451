const {MongoClient}=require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
  
const connection = async() => {
    try{
        await client.connect(); // wating until connection is established.
        const collection = client.db('node-3').collection('employee');
        await collection.updateOne({id:2},{$set:{id:4}});
        return Promise.resolve('Insertion Successful');
    }
    catch(err){
        return Promise.reject(err);
    }
}
connection().then((res)=>{
    console.log(res);
}).catch((error) =>{
    console.log('connection failure');
}); 



  

