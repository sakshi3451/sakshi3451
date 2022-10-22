const student ={
    name: 'sakshi',
    age : 23,
    hobbies: [' reading', 'dancing',],};
    for ( let key in student){ //for in loop is used to loop through the student object
    let value;
value = student[key]; // the value of each key is accessed by using student[key]
console.log(key + "-"+ value);
    }
    // 2
let  user ={
    name:'sakshi',
    email:'sakshijain6041@gmail.com',
    age:23,
    dob:20/03/1999,
};
for(let key in user){
    let value;
    value= user[key];
    console.log(key + "-" +value);
}
// 3
let student2 = {
    male :'aayu',
    female:'riya',
    address:'deori',

    };


for (let key in student2){
let value = student2[key];
console.log(key + "-" + value);
}

//4 
let car ={
    name1:'maruti',
    colour:' white',
    quantity:'two',
};
for ( key in car){
    let value = car[key];
    console.log( key + "-" + value);
}
// 5 
let fruit ={
    name2: 'mango',
    colour: 'yellow',
    quantity:12,
    packet:3,
};
for( key in fruit){
    let value = fruit[key];
    console.log(value + "- " + key);
}
 // 6
let animal ={
    name: 'lion',
    food:'nonveg',
    home:'den',
};
for ( key in animal){
    let value = animal[key];
    console.log( value + "- " + key);
}

// 7 
let food ={
    type:'indian',
    name: ' chapati',
    sweet: ' jalabi',
    drink:'lassi',
};
for ( key in food){
    let value =food[key];
    console.log( value + "-" + key);
}