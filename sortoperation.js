const {MongoClient}=require('mongodb'); // imported the mongoClient
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
  
const connection = async() => {
    try{
        await client.connect(); // wating until connection is established.
        const collection = client.db('node-3').collection('employeedata');
        
        const findResult = await collection.find({name:'sakshi'}).sort({name:1}).toArray();
        const mysort=({name:1});
        
       

        
        
        return Promise.resolve({findResult,mysort});

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




















    