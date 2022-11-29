const {MongoClient}=require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
  
const connection = async() => {
    try{
        await client.connect(); // wating until connection is established.
        const collection = client.db('node-3').collection('employeedata');
        await collection.insertOne({name:'sakshi',city:'sagar',course:'Nodejs'});
        await collection.updateOne({name:'sakshi'},{$set:{name:'disha'}});
        await collection.deleteOne({course:'nodejs'});
        await collection.findOne({name:'sakshi'});
        await collection.countDocuments();
        return Promise.resolve('find result');
    }
    catch(err){
        return Promise.reject(err);
    }
};
connection().then((res)=>{
    console.log(res);
}).catch((error) =>{
    console.log(`some Error ${error}`);
}); 



  

