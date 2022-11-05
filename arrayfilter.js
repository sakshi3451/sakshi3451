//filter method is used if you want to filter the element of an array based on a consition

const arr= [-1,-2,3,4,5,6];
const filteredArr= arr.filter((num,index,arr)=>{
    return num>0;
});
const filteredArrshort = arr.filter(num=> num>0);
console.log(filteredArr);
console.log(filteredArrshort);

//function to check the even number
  let numbers= [1,2,3,4,5,6];
  function checkEven (number){
    if(number%2==0)
    return true;
    else
    return false;
  }
let evennumbers=numbers.filter(checkEven);
console.log(evennumbers);

// function to check the odd numbers
let numbers1=[1,2,3,4,5,6,7,8,9];
function checkOdd (number){
    if(number%2==1)
    return true;
    else 
    return false;
}
let oddnumbers1 = numbers1.filter(checkOdd);
console.log(oddnumbers1);

// filter arr1
const arr1= [43,56,78,-54,-70];
const filteredArr1=arr1.filter((num,index,arr)=>{
    return num>1;
});
console.log(filteredArr1);

// filter arr
let arr2= [ 61,43,0,5,-2,-4,-0];
let filteredArr2= arr2.filter((num,index,arr)=>{
    return num<1;
});
console.log(filteredArr2);

// check the number is even using filter
let numbers2= [24,42,34,67,62,98];
function checkEven2(number){
    if(number%2==0)
    return true;
    else 
    return false;
}
   let evennumbers2= numbers.filter(checkEven2)
console.log(evennumbers2);

