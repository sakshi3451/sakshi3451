function Two (){
    console.log("two is called");
}
Two();
function Three (Callback){
    console.log("three is called");
    Callback();
}
Three(Two);

//2 
function Hello (){
    console.log("hello is called");
}
Hello();
function hii ( callback){
    console.log("hii is called");
    callback();
}
hii(Hello);

//3
function Ram (){
    console.log("Ram is called");
}
Ram();
function Raman(callback){
    console.log("Raman is called");
    callback();
}
Raman(Ram);
// 4
function samarth (){
    console.log("samarth is called");
}
samarth();
function Aayu (callback){
    console.log("Aayu is called");
callback();
}
Aayu(samarth);

//5 
function A (){
    console.log("A is called");
}
A();
function B(callback){
    console.log("B is called");
    callback();
}
B(A);