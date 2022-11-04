let promise = new Promise(function (resolve,reject){
    setTimeout(function() {
        resolve('promise resolved')},1000);
    
});
async function asyncfunction(){
    let result = await promise;
    console.log(result);
    console.log('hii');
}
asyncfunction();
//2
let promise2 = new Promise(function(resolve,reject){
    setTimeout(function() {
        resolve('hello resolved')},200);
    });
    async function asyncfunction(){
        let result =  await promise;
        console.log(result);
        console.log('ram');
    }
//3
let promise3 =new Promise(function(resolve,reject){
setTimeout(function(){
    resolve('promise resolved')},100);
});
async function asyncfunction(){
    try{
        let result = await promise;
        console.log(result);
    }
    catch (error){
        console.log(err);
    }
}
asyncfunction();

//4

    let promise4 = new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve ('Promise has been resolved')},);
        });
        async function asyncfunction(){
            try{
                let result = await promise;
                console.log(result);
            }
            catch(error){
                console.log(error);
            }
        }
        asyncfunction();
// 5 
const delayfunction=(a,b)=>{
    setTimeout(() => {
        return(a+b);
    }, 1000)
}
const addfunc=async()=>{
    const result= await delayfunction(21,23);
    console.log(result);
}
addfunc();

//6
 async function display(){
    let result =await sayhi();
    console.log(result);
 }

 //7
 async function getuser(userId){
    try{
        const user= await Promise.reject(new Error('Invalid user Id'));
    }
    catch(error){
        console.log(error);
    }
    }