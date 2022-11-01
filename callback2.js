function sayHello(){
    console.log("Hello");
}
    function sayHi(){
        console.log("Hi");
    }
    function add (num1,num2,callback){
        console.log(num1+num2);
        callback();
    }
    let a=10;
    let b=30;

    add(a,b,sayHello);
    add (40,60,sayHi);
add (40,60,function(){
    console.log("bye");
});

//2 
function Tina(){
    console.log("Tina");
}
function Ram (){
    console.log("Ram");
}
function sub (num3,num4,callback){
    console.log(num3-num4);
    callback();
}
let s=4;
let p=2;
sub(s,p,Tina);
sub(5,4,Ram);

//3 

function helloworld(){
    console.log("helloworld");
}
function helloeveryone(){
    console.log("helloeveryone");
}
function mul(num5,num6,callback){
  console.log(num5*num6);
    callback();
}
    let a1 =3;
    let b1 =4;
    mul(a1,b1,helloworld);
    mul(a1,b1,helloeveryone);
    
    //4

    function simplefunction(){
        console.log("simplefunction");
    }
    function simplefunction2(){
        console.log("simplefunction2");
    }
    function simplefunction3(){
        console.log("simplefunction3");
    }
    function div(num6,num7,num8,callback){

    console.log(num6/num7/num8);
    callback();
    }
    let x=10;
    let y=5;
    let z=15;
div(x,y,z,simplefunction);
div(x,y,z,simplefunction2);
div(2,4,6,simplefunction3);

// 5

function functionname(){
    console.log("functionname");
}
    function functiontype(){
        console.log("functiontype");
    }
        function Rajarama(){
            console.log("Rajarama");
        }
            function RamanRaja(){
                console.log("ramanraj");
            }
                function add2(number1,number2,number3,number4,callback){
                    console.log(number1+number2+number3+number4);
                    callback();
                }
                let l=4;
                let m=6;
                let n= 7;
                let o =9;

                add2(l,m,n,o,functionname);
                add2(l,m,n,o,functiontype);
                add2(1,2,3,0,Rajarama);

                //6
                 function  mohan(){
                    setTimeout(()=>console.log('mohan'),300);
                 }
function sara(){
setTimeout(()=>console.log('sara'),100);
}
    function add4(num12,num13,callback){
        console.log(num12+num13);

        callback();
    }
let m1=10;

let n1=12;
add4(m1,n1,mohan);
add4(m1,n1,sara)


        //7
        function functionsarika(){
            setTimeout(()=>console.log('functionsarika'),5000);
        }
        function functionramesh(){
            setTimeout(()=>console.log('functionramesh'),6000);
        }
        function functionpragati(){
            console.log('functionpragati');
        }
        function add5( a2,b2,c2,callback){
            console.log(a2+b2+c2);
            callback();
        }
        let a3 = 4;
        let b3 =7;
        let c3 = 9;
        add5(a3,b3,c3,functionsarika);
        
        //9
function mango(){
    console.log('mango');
}
    function apple(){
        console.log('apple');
    }
    function sub3(num6,num7,callback){
        console.log(num6-num7);
        callback();
    }
let num6=8;
let num7=9;
sub(num6,num7,mango);
sub(9,4,apple);

//10

function hellomumma(){
    console.log('hellomumma');
}
    function hellomen(){
        console.log('hellomen');
    }
    function div4(num9,num3,num0,callback){
        console.log(num9/num3/num0);
        callback();
    }
    let num9 = 8;
    let num3=4;
    let num0=2;
    div4(num9,num3,num0,hellomumma);
    