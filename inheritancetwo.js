class Parent {
    name = 'sakshi';
    methodOne(){
        return 'Name is ${ this.name}';
    }
}
class Child extends Parent{
    age = 43;
    methodTwo(){
        return `name is ${this.name} and age is ${this.age}`;
    }
}
const childObj= new Child();
console.log(childObj.methodTwo());


    //2
class Parent2 {
    city = 'sagar';
    methodThree(){
        return 'city is ${ this.city}';
    }
}
class Child2 extends Parent2{
    area= 'laxmiward';
    methodFour(){
        return `city is ${this.city} and area is ${this.area}`;
    }
}
const Child2Obj2= new Child2();
console.log(Child2Obj2.methodFour());


    

