// to string program using async await with exception handling

const tostringprogram=(arg)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        try{
            if(arg!=0){
                argResult=arg.toString();
            }
            resolve(argResult);
        }
        catch(err){
            reject(err);
        }
    },1000)
})
}
const tostringfunc=async()=>{
    const result = await tostringprogram([10,20,30,40]);
    return result;
}
tostringfunc().then((finalResult)=>{
    console.log(`After converting to String:$(finalResult)`);
}).catch((err)=>{
    console.log(`Error:${err}`);
})




    

        
            
        