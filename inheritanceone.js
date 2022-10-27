class Parent{
    constructor(name){
        this.name= name;
    }
methodParent(){
    return `Name of parent is ${ this .name}`;
}
}
class Child extends Parent{
    constructor( name,number){
        super(name);
        this.number =number;
    }
    methodChild(){
        return `name is ${ this.name} and number is ${ this.number}`;
    }
}
const childObj= new Child('Ram',3);
console.log(childObj.methodChild());
console.log(childObj.methodParent());
console.log(childObj.name);


//2 
class Parent2{
    constructor(age){
        this.age = age;
    }
    methodParent2(){
        return ` Name of the Parent2: ${ this.age}`;
    }
}
class Child2  extends Parent2{
constructor( age,school){
    super( age);
    this.school=school;
}
methodChild2(){
    return ` age of the parent2 is ${ this .age} and school of the child2 { this.school}`;

}
}
const Child2Obj2 = new Child2 ( 21,'suroyadaya');
console.log(Child2Obj2.methodChild2());
console.log( Child2Obj2.methodParent2());
console.log( Child2Obj2.age);
    
// 3 
class Parent3{
    constructor(city ,area ){
        this.city  = city;
    }
    methodParent3(){
        return ` Name of the Parent3: ${ this.city}`;
    }
}
class Child3  extends Parent3{
constructor( city ,area){
    super( city);
    this.area =area;
}
methodChild3(){
    return ` city of the parent3 is ${ this .city} and area of the child3 { this.area}`;

}
}
const Child3Obj3 = new Child3 ('sagar' ,'laxmiward');
console.log(Child3Obj3.methodChild3());
console.log( Child3Obj3.methodParent3());
console.log( Child3Obj3.city);
    
// 4
class Parent4{
    constructor(colour, hight){
        this.colour = colour;
    }
    methodParent4(){
        return ` Name of the Parent4: ${ this.colour}`;
    }
}
class Child4  extends Parent4{
constructor( colour,hight){
    super( colour);
    this.hight=hight;
}
methodChild4(){
    return ` colour of the parent4 is ${ this .colour} and school of the child4 is ${ this.school}`;

}
}
const Child4Obj4 = new Child4('black',5);
console.log(Child4Obj4.methodChild4());
console.log( Child4Obj4.methodParent4());
console.log( Child4Obj4.colour);
    
//5
class Parent5{
    constructor(colony, mobile){
        this.colony = colony;
    }
    methodParent5(){
        return ` Name of the Parent5: ${ this.colony}`;
    }
}
class Child5 extends Parent5{
constructor( colony,mobile){
    super( colony);
    this.mobile=mobile;
}
methodChild5(){
    return ` colony of the parent5 is ${ this .colony} and mobile of the child5 { this.mobile}`;

}
}
const Child5Obj5 = new Child5 (' vidhyavihar','samsung');
console.log(Child5Obj5.methodChild5());
console.log( Child5Obj5.methodParent5());
console.log( Child5Obj5.colony);
    

