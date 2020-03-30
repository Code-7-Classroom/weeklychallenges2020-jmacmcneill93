//Very Easy
var myAge = 26
var brothersAge = 35
console.log(brothersAge - myAge)

//Easy
var firstName = "Josh";
var lastName = "Mcneill"
console.log('The name ' + lastName + ' is longer than ' + firstName + ' by 3 letters')

//Medium
var input = prompt('Enter a word');

if (input === input.toUpperCase()) {
    console.log("You are shouting!")
} else if (input === input.toLowerCase()){
    console.log("you are whispering")
} else { 
     console.log("You are speaking normally")
 }

 //Hard

 function add(a, b){
     console.log(a + b)

 }
 add(1, 20)

 function subtract(a, b){
     console.log(a - b)
 }
 subtract(1,20)

 function multiply(a, b){
     console.log(a * b)
 }
 multiply(1,20)

 function divide(a, b){
     console.log(a / b)
 }
 divide(1,20)
 


 //Very Hard
 var inputNum1 = prompt('Please enter a number');
 var inputNum2 = prompt('Please enter another number');
 var inputOperator = prompt("Please enter an operator");

 switch(inputOperator.toString()){
     case '+':
     console.log(inputNum1 + " + " + inputNum2 + " = " + (parseInt(inputNum1) + parseInt(inputNum2)));
        break;
 } 

 switch(inputOperator.toString()){
     case '-':
         console.log(inputNum1 + " - " + inputNum2 + " = " + (parseInt(inputNum1) - parseInt(inputNum2)));
         break;
 }

 switch(inputOperator.toString()){
     case '*':
         console.log(inputNum1 + " * " + inputNum2 + " = " + (parseInt(inputNum1) * parseInt(inputNum2)));
         break;
 }

 switch(inputOperator.toString()){
     case '/':
         console.log(inputNum1 + " / " + inputNum2 + " = " + (parseInt(inputNum1) / parseInt(inputNum2)));
         break;
 }


