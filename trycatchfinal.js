const add =(a,b) => a+b;
let result = 0;
try{
    result= add(10,20);
}
catch(e){
    console.log(e.message);
}
finally{
    console.log({result});
}

//2
const sub =(x,y) => x-y;
try{
    result = sub(3,1);
}
catch(e){
    console.log(e.message);
}
finally{
    console.log({result});
}

//3
 let mul = (p,q) => p *q;

 try{
    result = mul(3,7);
 }
 catch(e){
    console.log(e.message);
 }
 finally{
    console.log({result});
 }

//4 
let numerator = 100,denominator ='q';
try{
    console.log(numerator/denominator);
    console.log(q);
}
catch(e){
    console.log('an e caught');
    console.log('e message:' + e);
}
finally{
    console.log('finally will execute every time');
}

//5 
let div = (a1,b1)=> a1/b1;
try{
    result=div(4,2);

}
catch(e){
    console.log(e.message);
}
finally{
    console.log({result});
}