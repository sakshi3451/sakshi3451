const student ={
    name: 'sakshi',
    age : 23,
    hobbies: [' reading', 'dancing',],};
    for ( let key in student){ //for in loop is used to loop through the student object
    let value;
value = student[key]; // the value of each key is accessed by using student[key]
console.log(key + "-"+ value);
    }
    
