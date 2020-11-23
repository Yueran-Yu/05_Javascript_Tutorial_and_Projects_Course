// CMD + OPTION + J === MAC open the developer tool --- console page
// can contain digits, letters, underscore, must start with letter $ or _

// Data types = primitive
// object - arrays, functions, objects
// typeof - operator

// falsy: "",'', ``, 0, -0, NaN, false, null, undefined.

let names = ["john", "bob", "barry", "obga", 12, 3];
let text = " Peter soqmw";
let num = 1;
document.write("nice");
console.log("hello");
console.log(" Plr".length);
console.log(text.indexOf("p"));
console.log(text.indexOf("s"));

const lastNames = ["peeper", "onion", "banana"];
const allNames = names.concat(lastNames);
console.log(allNames);
console.log(allNames.reverse());

// unshift, inserting the first item in my array
allNames.unshift("susy");
console.log(allNames);

// shift, getting rid of the first item in my array
allNames.shift();
// allNames.shift();
console.log(allNames);

// push: add element to the end of the array
allNames.push("susy");
console.log(allNames);
// pop: remove the element to the end of the array
allNames.pop();
console.log(allNames);
//splice: index-length
const specificNames = allNames.splice(2, 3);
console.log(specificNames);

const namesA = ["anna", "susy", "bob"];

function testing(arr) {
    // console.log(arr);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let newItem = `${arr[i]} jordan `;
        newArr.push(newItem);
    }

    if (newArr.length > 2) {
        return console.log(`here is your long array: ${newArr}`);
    }
    console.log(
        "here is the code keep going to execute if there is no return in the method above."
    );
}
testing(namesA);

/* callback functions, higher order functions, functions, as first class objects
functions are first class objects - stored in a variable, passed as an argument
to another function, return from function (closure).
Higher order function - accepts another function as argument or returns another function as a result.
Callback function - passed to a another function as an arguement and executed inside that function. */

function greeting() {
    console.log("hello wrt");
}

function calculate(arr, cb) {
    cb();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let newItem = add(arr[i]);
        result.push(newItem);
    }
    return result;
}

function add(number) {
    return number + 10;
}

function mulity(param) {
    return param * 10;
}

let additionResult = calculate([1, 2, 3], add);
let multiplyResult = calculate([1, 2, 3], mulity);
console.log(additionResult);
console.log(multiplyResult);

// forEach: does not return new array
const people = [
    { name: "bob", age: 20, position: "developer", id: 4, salary: 300 },
    { name: "peter", age: 22, position: "designer", id: 3, salary: 400 },
    { name: "susy", age: 30, position: "the boss", id: 1, salary: 500 },
    { name: "nana", age: 35, position: "nobody", id: 5, salary: 200 },
];

function showPerson(person) {
    console.log(person.position.toUpperCase());
}

// people.forEach(showPerson) ;
people.forEach((person) => {
    return console.log(person.name);
});

// map
// does return a new array
// does not change size of original array
// uses values from original array when make new one
const ages = people.map((person) => person.age + 20);
console.log(ages);

const names2 = people.map((p) => `<h1>${p.name}</h1>`);
console.log(names2);

const newPeople = people.map((p) => {
    return { firstName: p.name.toUpperCase(), oldAge: p.age + 20 };
});
console.log(newPeople);

// filter
// does return a new array
// does modify size of the array
// checks condition, if none match empty array
const youngPeople = people.filter((p) => p.age < 26);
console.log(youngPeople);

const developers = people.filter((p) => p.position === "developer");
console.log(developers);

//find
// return first match, if no match undefined
// great for getting unique value
const person = people.find((p) => p.id === 5);
console.log(person);

const person3 = people.filter((p) => p.id === 5);
console.log(person3[0].name);

// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration / value, the initial value

const total = people.reduce((acc, curr) => {
    acc += curr.salary;
    return acc;
}, 0);

console.log(total);

// Math
// standard build-in objects - available

console.log("................................");
const number = 4.5678;
const number2 = 3.103;
const result = Math.sqrt(number);
const result1 = Math.ceil(number);
const result2 = Math.floor(number);
const result3 = Math.min(4, 3, 5, 6, 1);
console.log(result);
const result4 = Math.floor(Math.random() * 10 + 1);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

// Date Object
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const date = new Date();
let month = date.getMonth();
let day = date.getDay();
let year = date.getFullYear();
console.log(month);
console.log(day);
console.log(year);

console.log(`Month is: ${months[month]}, the day is: ${days[day-1]}, the year: ${year}`);