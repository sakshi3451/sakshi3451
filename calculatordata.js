<script>
// read number in the program 
const num1 = parsefloat(prompt('enter nr1:')); // 20 >> '20'
const num2 = parsefloat(prompt('enter nr2:')); // 'abc' , '' ,null 
// read operator
const operator = prompt ('enter operator(+,-,*,/));
let reault = 0;
if(isNaN(num1)||(isNaN(num2)){
    alert('wrong input ! refresh the page again and provide data!');
}
else{
    if (operator == '+' ){
        result = num1+num2;
    }
    else if ( operator == '-'){
        result = num1-num2;
    }
    else if ( operator =='*'){
        result=num1*num2;
    }
    else if(operator == '/')

    result= num1/num2;
}
document.write(num1+operator+num2+'='+result);
}
</script>