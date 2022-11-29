const {MongoClient}=require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
  
const connection = async() => {
    try{
        await client.connect(); // wating until connection is established.
        const collection = client.db('node-3').collection('mongodata');
        await collection.insertOne({name:'anjna',subject:'nodejs3',address:'bhopal',age:43});
        const findResult = await collection.findOne({name:'anjna'});
        await collection.updateOne({name:'sakshi'},{$set:{address:'banglore'}});
        const findResultAfterupd = await collection.findOne({name:'anjna'});
        const number = await collection.countDocuments();
       const deleteResult= await collection.deleteOne({subject:'nodejs3'});
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
