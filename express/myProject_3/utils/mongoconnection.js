const{ Mongoclient}= require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new Mongoclient(url);
const connection= async()=>{
    try{
        await client.connect();
        const collection=client.db('node-3').collection('employee');
        return Promise.resolve(collection);
    }
    catch(err){
        return Promise.reject(err);

    }

};
exports.connection=connection;

