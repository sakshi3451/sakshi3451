const {MongoClient}=require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
  
const connection = async() => {
    try{
        await client.connect(); // wating until connection is established.
        const collection = client.db('node-3').collection('employeedata');
        await collection.insertOne({name:'subhi',subject:'nodejs2',address:'guna'});
        const findResult = await collection.findOne({name:'subhi'});
        await collection.find().limit(1);
        const mysort={name:1};
        await collection.updateOne({name:'subhi'},{$set:{address:'jabalpur'}});
        const findResultAfterupd = await collection.findOne({name:'subhi'});
        const number = await collection.countDocuments();   
       const deleteResult= await collection.deleteOne({subject:'nodejs2'});
         return Promise.resolve({findResult,findResultAfterupd,numberOfRecords:number,deleteResult,mysort});
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
