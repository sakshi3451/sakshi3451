
const promiseOne = (arr) => {
    return new Promise((resolve,reject) => {
        try{
            for(let i=0;i<arr.lenght;i++){
                arr[i]=arr[i]*arr[i]*arr[i];
            }
            resolve[arr];
        }
        catch(err){
            reject(`Exception has occured:${err}`);
        }
        })
}
promiseOne([11,2,3]).then((result)=>{
    console.log(`Final cubed array is:${result}`);
    return new Promise((resolve, reject) => {
        const sortedArr= null.sort((a,b)=> {
            return a-b;
        });
        resolve(sortedArr);
    })
}).then ((secResponce)=>{
    console.log(`sorted responce is:${secResponce}`);
}).catch((errResult)=> {
    console.log(`catch block is :${errResult}`);
});
//2
const promise = new Promise((resolve,reject)=>{
    console.log('promise called');
    let obj={
        name1:'sakshi',
        userId:12
    }
    resolve(obj);
    reject('something wrong!')
})
promise
.then((value)=>{
    console.log(value)
})
.catch(err=> {
    console.log("error is :"+err)
})
// 3 
const promise2= new Promise((resolve,reject)=>{
    console.log("promise");
    let obj ={
        name:'ram',
        dob:20,
        address:'laxmiward',
    }
    resolve(obj);
    reject(wrong)
})
promise2
.then((value)=>{
console.log(value)
})
.catch(err=>{
    console.log("err is :"+err)
})

//5
const promise5 = new Promise((resolve,reject)=>{
    console.log("promise5");
    const obj = {
        name1:'sta',
        cast:'Tim',
    }
    resolve(obj);
    reject(wrongname)
})
promise
.then((value)=>{
    console.log(value)
})
.catch(err=>{
    console.log("err is :"+ err)
})



