// Activity 1: function Declaration
let num1 = 13;
function oddeven(num1) {
   
    if (num1 % 2 ===0) {
        console.log(`${num1} is even`);  
    }
    else {
        console.log(`${num1} is odd`);
    }
}
oddeven(num1);

let num2 = 7;
function square(num2) {
    return num2 * num2;
}
console.log(`The square of ${num2} is ${square(num2)}`);

// Activity 2: Function Expression

function maximumnum(num3,num4){
    if(num3 > num4){
       console.log(`${num3} is the maximum`);
    }
    else{
        console.log(`${num4} is the maximum`);
    }
}
maximumnum(8, 12);

const concatenateStrings = function(string1, string2) {
    return string1 + string2;
  };
  
  let result = concatenateStrings("Hello", "World");
  console.log(result); 
  
// Activity 3: Arrow Function
const sumOfTwoNumbers = (a, b) => a + b;

let sum = sumOfTwoNumbers(3, 4);
console.log(`output is :  ${sum}`); 

const containsChar = (str, char) => str.includes(char);

let character_con = containsChar("hello", "l");
console.log(character_con); 

// Activity 4: Function Parameters and Default Values
const calculateProduct = (a, b = 1) => a * b;

let result1 = calculateProduct(5, 3);
let result2 = calculateProduct(4);
console.log(result1); 
console.log(result2); 


const greetPerson = (name, age = 30) => `Hello ${name}, you are ${age} years old`;
let greeting1 = greetPerson("Rita", 20);
let greeting2 = greetPerson("Amrita"); 
console.log(greeting1); 
console.log(greeting2); 


// Activity 5: Higher-Order Functions

const callFunctionMultipleTimes = (func, num) => {
    for (let i = 0; i < num; i++) {
      func();
    }
  };
  
  const myFunction = () => console.log("Hello");
  callFunctionMultipleTimes(myFunction, 3);
  

