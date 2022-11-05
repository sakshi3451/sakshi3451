const arr = [1,2,3,4,5,6];
const result = arr.reduce((preNum,currNum,index,arr)=>{
    console.log( preNum,currNum);
    return preNum*currNum
});
console.log(result);

//reducer will reduce array to a single element // program2
let arr1 = [2,3,4,5,6];
const result1 = arr.reduce((preNum,currNum,index,arr)=>{
    console.log(preNum,currNum);
    return preNum+currNum
});
console.log(result);

//  program3
const arr2 = [5,6,7,8,9];
const result2 = arr.reduce((preNum2,currNum2,index,arr2)=>{
    console.log(preNum2,currNum2);
    return preNum2-currNum2 
});
console.log(result);

//program reducer 4
let arr3 = [23,45,67,89];
let result3 = arr3.reduce((preNum3,currNum3,index,arr3)=>{
    console.log(preNum3,currNum3);
    return preNum3*currNum3
});
console.log(result3);

///program 5
  const arr4 = [21,32,45,87,94];
  const result4 = arr4.reduce((preNum4,currNum4,index,arr4)=>{

  console.log(preNum4,currNum4);
  return preNum4/currNum4
});
console.log(result4);