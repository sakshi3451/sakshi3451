const {MongoClient}= require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const connection= async()=>{
    try{
        await client.connect();
        const collection=client.db('node-3').collection('employeedata');
        return Promise.resolve(collection);
    }
    catch(err){
        return Promise.reject(err);

    }

}
const adminMsgConnection= async()=>{
try{
    await client.connect();
    const collection=client.db('node-3').collection('adminMessage');
    return Promise.resolve(collection);
}
catch(err){
    return Promise.reject(err);

}

};
exports.connection=connection;
exports.adminMsgConnection=adminMsgConnection;