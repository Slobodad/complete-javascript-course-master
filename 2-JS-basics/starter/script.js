/*****************************
 * Variables and data types
 */
/*
var firstName = 'Jone';
console.log(firstName);

var lastName = 'Smith';

var age = '28';

var fuulAge = true;

var job;
console.log(job);

job = 'Teacher'
console.log(job);

// Variables naming rules
var _3year = 3;
var johnMarck = 'John and Marck';
// Var if = 23;
*/


/*****************************
 * Variables mutation and type coercion
 */

/*
 var firstName = 'John';
 var age = 28;

Type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/*****************************
 * Basic operators
 */

/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof operator
console.log(typeof johnOlder); // Boolean
console.log(typeof ageJohn); // Number
console.log(typeof 'Mark is older than John'); // string
var x;
console.log(typeof x); // Undefined
*/

/*****************************
 * Operator precendece
 */

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

*/

/*****************************
* Coding challenge 1
*/

/*
var massJohn = 90;
var heightJohn = 1.85;

var massMarck = 80;
var heightMarck = 1.75;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMarck = massMarck / (heightMarck * heightMarck);

console.log(bmiJohn);
console.log(bmiMarck);

var higherBmi = bmiJohn > bmiMarck;
console.log('Is John\'s BMI higher than John`s?' + ' ' + higherBmi);
*/

/*****************************
* if / else statement
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massJohn = 90;
var heightJohn = 1.85;

var massMarck = 80;
var heightMarck = 1.75;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMarck = massMarck / (heightMarck * heightMarck);

if (bmiJohn > bmiMarck){
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/

/*****************************
* Boolean logic
*/

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*****************************
* The Ternary Operators and Switch Statements
*/

// Ternary operators
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statements
var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}