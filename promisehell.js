
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



