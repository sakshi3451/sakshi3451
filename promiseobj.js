const promiseOne = new Promise((resolve,reject)=> {
    setTimeout(() =>{
        const a =1;
        if(a===1)
        resolve('true');
        else
        reject('false');
    },2000)
});
    promiseOne.then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.error(err);
    });

        //2
        const promiseTwo = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const a1 = true;
                if(a1===true)
                resolve('success');
                else
                reject('false');
            },300)
            });
            promiseTwo.then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.error(err);
            });
    //3
    const count = 'hello';
    let countvalue = new Promise(function(resolve,reject){
        if(count){
            resolve("there  is a count value");
        }
            else{
                reject("there is no count value");
            }
        });
        console.log('countvalue');
            
// 4
let promise = new Promise ((resolve,reject) =>{
    setTimeout(() => {
        let x =4;
        if(x===4)
        resolve('correct');
        else
        reject('incorrect');
    },5000)
});
promise.then((res) =>{
    console.log(res);
}).catch((err)=>{
    console.err(err);
});

//5 
 let promise1 = new Promise(( resolve,reject)=>{
    setTimeout(()=>{
    let p = 1;
    if(p===1)
    resolve('complete');
    else
    reject('incomplete');
    },6000)
});
promise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.err(err);
});
