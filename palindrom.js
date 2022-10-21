// check the string is palindrom or not

 function checkpalindrom(string)
{

    const len = string.length ;// check the length of string

    for (let i =0; i<len/2; i++){ // loop through the half of string
         
        if (string[i] !== string [len -1-i]){  // check if first  and last string are same 
            return'It is not a palindrome';
        }
    
    return'It is a palindrome';
 }
}    
  //  const string = ('enter a string:'); // take input
   // const value = checkpalindrom(string); // call the function
   // console.log(value);

    

console.log(checkpalindrom("hello"));
