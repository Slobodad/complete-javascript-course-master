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
/*
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
*/

/*****************************
* Truthy and falsy values and equality operators
*/

// Falsy values: udefined, null, 0, '', NaN
// Truthy values: NOT falsy values

/*****************************
* Coding challenge 2
*/
/*
var johnFirstScore = 89;
var johnSecondScore = 120;
var johnThirdScore = 103;

var MikeFirstScore = 116;
var MikeSecondScore = 97;
var MikeThirdScore = 123;

var MaryFirstScore = 97;
var MarySecondScore = 134;
var MaryThirdScore = 105;

var johnAverageScore = (johnFirstScore + johnSecondScore + johnThirdScore) / 3;
var MikeAverageScore = (MikeFirstScore + MikeSecondScore + MikeThirdScore) / 3;
var MaryAverageScore = (MaryFirstScore + MarySecondScore + MaryThirdScore) / 3;

console.log(johnAverageScore);
console.log(MikeAverageScore);
console.log(MaryAverageScore);

if (johnAverageScore > MikeAverageScore && johnAverageScore > MaryAverageScore) {
    console.log('John team has highest average score');
} else if (johnAverageScore < MikeAverageScore && MikeAverageScore > MaryAverageScore) {
    console.log('Mike team has highest average score');
} else if (johnAverageScore < MaryAverageScore && MikeAverageScore < MaryAverageScore) {
    console.log('Mary team has highest average score');
}else {
    console.log('Both team has same average score');
}
*/

/*****************************
* Function
*/
/*
function calculateAge (birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is already retired.');
    }

    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*****************************
* Function Statements and Expression
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}
/*
// Function Expression
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' theaches kids how to code'
        case 'driver':
            return firstName + ' drives a car in Lisabone'
        case 'designer':
            return firstName + ' designs beautiful websites'
        default:
            return firstName + ' does something else'
    }
}

console.log( whatDoYouDo('teacher', 'John'));
console.log( whatDoYouDo('designer', 'Jane'));
console.log( whatDoYouDo('driver', 'Mike'));
console.log( whatDoYouDo('retired', 'Alfred'));
*/


/*****************************
* Arrays
*/
/*
var names = ['John', 'Mark', 'jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

// Different data types
var John = ['John', 'Smith', 1990, 'teacher', false];

John.push('blue');
John.unshift('Mr.');

John.pop();
John.shift();
console.log(John);

console.log(John.indexOf(1990));
console.log(John.indexOf(23));

var isDesigner = John.indexOf('designer') === -1 ? 'John is Not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/*****************************
* Coding challenge 3
*/

/*
function Howtip(bill) {
    var tip;
    if(bill < 50){
        tip = bill * 0.2
    } else if (bill >= 50 && bill < 200) {
        tip = bill * 0.15
    } else if (bill >= 200) {
        tip = bill * 0.1
    }

    return tip;
}

var billArray = [124, 48, 268];

var tipArray = [
    Howtip(billArray[0]),
    Howtip(billArray[1]),
    Howtip(billArray[2])
];

var billsWithTipsArray = [
    billArray[0] + tipArray[0],
    billArray[1] + tipArray[1],
    billArray[2] + tipArray[2],
];

console.log(tipArray, billsWithTipsArray);
*/

/*****************************
* Objects and properties
*/

/*
// Objects literal
var john = {
    firstName: 'john',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear'
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane[lastName] = 'Smith';
*/

/*****************************
* Objects and methods
*/

/*
var john = {
    firstName: 'john',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calclAge: function(birthYear) {
        return 2018 - birthYear;
    }
};

console.log(john.calcAge(1990));
*/
/*
var john = {
    firstName: 'john',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();

console.log(john);
*/

/*****************************
* Coding challenge 4
*/

/*
var john = {
    mass: 90,
    height: 1.85,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

john.calcBmi();

var marck = {
    mass: 80,
    height: 1.75,
    calcBmi: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi
    }
}

marck.calcBmi();

if (john.bmi > marck.bmi) {
    console.log('John BMI higer then Mark.');
} else if (marck.bmi > john.bmi) {
    console.log('Marck BMI higer then John.');
} else {
    console.log('They BMI sre equal');
}

console.log(john, marck);
*/

/*****************************
* Coding challenge 5
*/

var johnPaid = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid: [],
}

for (i = 0; johnPaid.bills.length > i; i++) {
    if(johnPaid.bills[i] < 50) {
        tip = johnPaid.bills[i] * .2;
    } else if (johnPaid.bills[i] >= 50 && johnPaid.bills[i] < 200) {
        tip = johnPaid.bills[i] * .15;
    } else {
        tip = johnPaid.bills[i] * .1;
    }

    johnPaid.tips.push(tip);
    johnPaid.finalPaid.push(tip+johnPaid.bills[i]);
};


console.log(johnPaid.bills);
console.log(johnPaid.tips);
console.log(johnPaid.finalPaid);


var marckPaid = {
    bills: [77, 375, 110, 45],
    tips: [],
    finalPaid: [],
    calcTip: function() {
        for (i = 0; this.bills.length > i; i++) {
            if(this.bills[i] < 100) {
                tip = this.bills[i] * .2;
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                tip = this.bills[i] * .1;
            } else {
                tip = this.bills[i] * .25;
            }

            this.tips.push(tip);
            this.finalPaid.push(tip+this.bills[i]); 
        }
    }
}

marckPaid.calcTip();

console.log(marckPaid.bills);
console.log(marckPaid.tips);
console.log(marckPaid.finalPaid);








