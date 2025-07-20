// Write a program to create an object representing a person with properties for name, age, and gender.
let person = {
    name: 'Rita Kumari',
    age: 24,
    gender: 'Female'
}
console.log(person);


// Write a program to access and print the name property of an object.
console.log(person.name);


// Write a program to add a new property to an object.
let createUser = {
    name: 'John',
    age: 30
}
createUser.job = 'software Developer'
console.log(createUser)

// Write a program to delete a property from an object.

let programmer = {
    progrmmerName: 'jhon',
    age: 40,
    job: 'SWD'
}
delete programmer.job;
console.log(programmer);
// Write a program to check if a property exists in an object.
console.log(programmer.hasOwnProperty('isLoggedIn'));

// Write a program to loop through all properties of an object using a for...in loop.

let programmer_1 = {
    progrmmerName: 'jhon',
    age: 40,
    job: 'SWD'
}
for (let property in programmer_1) {
    console.log(property + ": " + programmer_1[property]);
}
// Write a program to merge two objects.
const obj1 = { 1: 'amrita ', 2: 'Kumari' }
const obj2 = { 3: 'Rita ', 4: 'Kumari' }
const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

// Write a program to create an array of objects and print each object's properties.

let people = [{ name: "John", age: 30, job: "Software Developer" },
{ name: "Jane", age: 25, job: "Graphic Designer" },
{ name: "Mike", age: 35, job: "Product Manager" }
];
for (let index = 0; index < people.length; index++) {
    console.log(`Person ${index + 1}:`);
    for (let property in people[index]) {
     console.log(` ${property}: ${people[index][property]}`);
     }

}
// Write a program to create a function that takes an object as an argument and prints all its properties.
function myfunction(obj){
    for( let property in obj){
        console.log(`engineer ${property}:${obj[property]}`);
    }
}

let engineer = {
    name: 'jhon',
    age: 23,
    roll: 'Cloud Engineer'
}
myfunction(engineer);

// Write a program to create a nested object and access its nested properties.
const user = [
    {
        id: 1,
        email: 'amrita.spj2222@gmail.com'
    },
    {
        id: 1,
        email: 'amrita.spj2222@gmail.com'
    },
    {
        id: 1,
        email: 'amrita.spj2222@gmail.com'
    },
    {
        id: 1,
        email: 'amrita.spj2222@gmail.com'
    }

]
console.log(user[1].email);