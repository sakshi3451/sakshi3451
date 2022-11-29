const {MongoClient}=require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
  
const connection = async() => {
    try{
        await client.connect(); // wating until connection is established.
        const collection = client.db('node-3').collection('employeedata');
        await collection.insertOne({name:'sakshi',subject:'nodejs',address:'bhopal'});
        const findResult = await collection.findOne({name:'sakshi'});
        await collection.updateOne({name:'sakshi'},{$set:{address:'sagar'}});
        const findResultAfterupd = await collection.findOne({name:'sakshi'});
        const number = await collection.countDocuments();
       const deleteResult= await collection.deleteOne({subject:'nodejs'});
         return Promise.resolve({findResult,findResultAfterupd,numberOfRecords:number,deleteResult});
    }
    catch (err){
        return Promise.reject(err);
    }
};
connection().then((res)=>{
    console.log(res);
}).catch((error) =>{
console.log(`Some Error ${error}`);
});
