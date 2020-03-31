//very easy
var min = function(x, y) {
    return (x <= y) ? x : y;
};
 console.log(min(6, 10));


 //Easy
 var student1 = ['Doe', 'John', 25];
 var student2 = ['Jane', 'Lisa', 23];
 var student3 = ['McNeill', 'Josh', 26];

 console.log('Hello, my name is ' + student2[1] + ' ' + student2[0] + ' and I am ' + student2[2] + ' years old.');

 //Medium
 var input = parseInt(prompt('Please enter a number 1-12'));

 var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

 if (input< 1 || input > 12) {
     alert('Not a valid number');
 } else {
     console.log(months[input - 1]);
 }


//Hard

var massTom = 8; //lb
var heightTom = 9; //in

var massJerry = 45; //cm
var heightJerry = 10; //g

var BMITom = massTom / (heightTom * heightTom);
var BMIJerry = massJerry / (heightJerry * heightJerry);

var tomHigherBMI = BMITom > BMIJerry;

console.log("Is Tom's BMI higher than Jerry's?");
console.log(BMITom > BMIJerry);
