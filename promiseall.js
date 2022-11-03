const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('first promise has resolved');
resolve(32);
    }, 32);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('second promise has resolved');
        resolve(43);
    },42)
});
const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('third promise has resolved');
        resolve(50);
    }, 50)
});
Promise.all([p1,p2,p3]).then((values)=>{
    console.log(values);
});

