class Sample {
    a= 54;
    b=32;
sampleMethod(){
    return ` Add is : $ { this.a + this.b}`;
}
}
const  obj= new Sample();
console.log( obj.sampleMethod());


//2 
class Rohan {
    x = 23;
    y = 65;

sampleMethod(){
    return `sub is  : $ { this.x - this.y}`;
    }
}
const obj2 = new Rohan ();
console.log( obj2.sampleMethod());

// 3 
class Ram {
    s= 15;
    p=12;
    sampleMethod(){
        return ` mul is : ${ this.s * this.p}`;
    }
}
const obj3= new Ram ();
console.log(obj3.sampleMethod());

//4 
 class Riya{
 a1= 10;
b1 = 5;
sampleMethod(){
    return `div is : ${ this.a1/this.b1}`;
}
 }
 const obj4 =  new Riya();
 console.log( obj4.sampleMethod());

// 5
class Tina {
    a = 43;
    b = 42;
    sampleMethod(){
        return ` per is : $( this.a % this.b)`;
    }
}
const obj5 = new Tina();
console.log( obj5.sampleMethod());
