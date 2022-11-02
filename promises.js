const promiseOne = (num) => {
    return new Promise((resolve,reject) => {
        if (num %2 === 0) {
            resolve('Number is Even');
        } else {
            reject ('Number is Odd');
        }
    })
}
promiseOne(24).then((result)=> {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

//2 
const promiseTwo = (number) => {
    return new Promise((resolve, reject) => {
        if(number%2 ===1){
            resolve('Number is Even');
        }else{
            reject('Number is Odd');
        }
    })
}
promiseTwo(42).then((result) =>{
    console.log(result);
}).catch((err) =>{
    console.log(err);
})
    
//3 
const promisethree = (arr) => { // find out  the cubes of the numbers.
    return new Promise((resolve,reject)=>{
    try{  // code comes here
        for(let i=1; i<arr.lenght; i++){
            arr[i] = arr[i]*arr[i]*arr[i];
        }
        resolve(arr);
    }
    catch(err){
        reject(`Exception has occured :${err}`);
    }
})
}
promisethree(1,2,3,4,5).then((result) =>{
    console.log(`final cubed array is: ${result}`);
}).catch((err) =>{
    console.error(err);
});


//4
const promiseFour = (arr) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            try{
                for(let i=1; i<arr.lenght;i++){
                    arr[i] = arr[i]*arr[i]*arr[i];
                }
                resolve(arr);
            }
            catch(err){
                reject(`Exception has occured:${err}`);
            }
        },3000)
    })
}
promiseFour([1,2,3]).then((result) => {
    console.log(`final cubed array is:${result}`);
}).catch((errResult) =>{
    console.error(errResult);
});

//5     // program with promise 
const count = true;
let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve("there is a count value.");
    }
    else{
        reject("there is no count value");
    }
});
console.log(countValue);

// 6 
const count2 = true;   // return  promise
let count2Value2 =new Promise(function(resolve,reject){
    resolve("Promise resolved");   // executes when the promise is resolved successfully
});
count2Value2
.then(function successValue(result){
    console.log(result);
})
.then(function sucessValue1(){
    console.log("you can call multiple function in this Way.");
});

//7 
const promise1 = (numbers)=>{
    return new Promise((resolve,reject) => {
if (numbers%2 ===2){
    resolve('number is true');
}
else{
    reject('number is false');
}
    })
}
promise1(24).then((result)=>{
console.log(result);
}).catch((err) =>{
    console.log(err);
})

//8 
const promise2 = (number2)=>{
    return newPromise((resolve,reject)=>{
        if(number2===0){
            resolve('number is true');
        }
        else{
            reject('number is false');}
        })
    }
    promise1(12).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    })

    //9 
    const count3 = true;
    let count3Value= new Promise(function(resolve,reject){
        if (count3){
            resolve("there is a count value.");
        }else{
            reject("there is no count value.");
        }
    });
    console.log(count3Value);

//10 
const promise5 =(arr)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            try{
                for(let i =0;i<arr.lenght;i++){
                    arr[i]=arr[i]*arr[i]*arr[i];
                }
                resolve(arr);
            }
            catch(err){
                reject(`Exception has occured :${err}`);
            }
        },2000)
    })
}
promise5(1,2,3).then((result)=>{
    console.log(`final cubed array is :${result}`);
}).catch((errResult) => {
    console.error(errResult);
});
