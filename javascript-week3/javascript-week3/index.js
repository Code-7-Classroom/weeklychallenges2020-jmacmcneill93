//Easy
function exercise (excercises) {
    return function () {
      return `Today's exercise: ${excercises}`
    };
  };
 
 var run = exercise('running');
 console.log(run()); 
 var swim = exercise('swimming');
 console.log(swim()); 

 //Medium
 function cutPizzaSlices (slices) {

     function sharePizza(people) {
        return(`Each person gets ${slices / people} slices of pizza.`);
     };
  
   console.log(sharePizza(2));
   console.log(sharePizza(3));
}; 
     
var sharePizza = cutPizzaSlices(8);

//Hard
var personInfo = (function (personalData) {
    var pii = {
        name: 'Josh McNeill',
        ssn: '273-49-2390'
    }
    return public = {
        getName: function getName() {
            return pii.name;
        }
    };
})();
console.log(personInfo.getName());

//Very Hard
//1
function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}
//2
Person.prototype.exercise = function () {
    return "Running is fun! - said no one ever";
}
//3
Person.prototype.fetchJob = function () {
    return this.name + ' is a ' + this.job
}
//4
function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.language = languages;
    this.busy = true;
}
//5
Programmer.prototype.completeTask = function () {
    this.busy = false;
}
Programmer.prototype.acceptNewTask = function () {
    this.busy = true;
}
//6
Programmer.prototype.offerNewTask = function () {
    if (this.busy) {
        console.log(' cant accept any new tasks right now.');
    } else {
        console.log(' would love to take on a new responsibility." if the programmer is not busy.')

    }
}
//7
Programmer.prototype.learnLanguage = function () {
    this.listLanguages = [];
}
//8
const me = new Person("Josh", "RoadToHire Student", 26)
console.log(me.fetchJob());
const leo1 = new Programmer("Leo", "RoadtoHire Student", 18, ["HTML", "CSS", "JS"]);
console.log(leo1);


