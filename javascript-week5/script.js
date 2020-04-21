//Very Easy
// Var is a variable that declares something that can be re-declared or changed. 
// Let can declare variables but only inside the scope of the statement and can be updated.
// Const can not be changed, re-clared or updated.

//Easy
const newArray = [1, 5, 13, 7, 9];
console.log(Math.max(...newArray));

//Medium
let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([25, 30, 15, 50]));


//Hard

//if else statement


let pageBody = document.querySelector('.body1');

let redButton = document.querySelector('.redButton');
let whiteButton = document.querySelector('.whiteButton');


redButton.addEventListener('click', () => {
    pageBody.classList.add('bg-red');
    pageBody.classList.remove('bg-white');
});

whiteButton.addEventListener('click',() => {
    pageBody.classList.add('bg-white');
    pageBody.classList.remove('bg-red');

});


//very Hard

function singleChar(str) {
    console.log(str);

    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str.charAt(i)) === str.lastIndexOf(str.charAt(i))) {
            console.log(str.charAt(i));
            break;
        }
        
    }
}

singleChar("the quick brown fox jumps over the calm kitten quietly");