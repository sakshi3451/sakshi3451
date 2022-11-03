const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('first promise has resolved');
resolve(32);
    }, 32*1000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('second promise has resolved');
        resolve(43);
    },43*5000)
});
const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('third promise has resolved');
        resolve(50);
    }, 50*9000)
});
Promise.all([p1,p2,p3]).then((values)=>{
    console.log(values);
});

