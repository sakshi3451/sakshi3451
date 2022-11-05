const arr=[1,2,3,4,5,6];
const mapedArr= arr.map((num,index,arr)=>{
    if(index===2)
    return num*4;
    else
    return num;
});
console.log(mapedArr);

// 
const arr1=[2,3,4,5,6,9];
const mapedArr1=arr1.map((num,index,arr1)=>{
    if(index ===1)
    return num*2;
    else
    return num;
});
console.log(mapedArr1);
  
//return number is even 
const numbers = [1,2,3,4,5,6];
function checkEven(number){

    if(number%2==0)
    return true;
    else
    return false;
}
    let evennumbers=numbers.map(checkEven);
    console.log(evennumbers);

    //3
    const arr2 = [2,4,6,8];
    const mapedArr2 = arr2.map((num,index,arr)=>{
        if(index===0)
        return num*1;
        else
        return num;
    });
    console.log(mapedArr2);

    //4
    let arr3 = [32,54,67,89,01];
    let mappedArr3 = arr3.map((num,index,arr)=>{
        if(index==1)
        return num*7;
        else
        return num;
    });
    console.log(mappedArr3);
     

    //5
  // return the numbers is odd

  const arr4 = [ 1,2,3,,7,8,9];
  function checkOdd4 ( number6){
    if(number6%1==0)
    return true;
    else 
    return false;
  }
  let oddnumbers4 = arr.map(checkOdd4);
  console.log(oddnumbers4);