// Arithmetic operator are used to perform arithmetic calculations.

/*
operator                    Name                    Example  

+                           Addition                x + y
-                           Subtraction             x - y
*                           Multiplication          x * y
/                           Divide                  x / y
%                           Remainder               x % y
++                          Increment               ++x  or x++
--                          Decrement               --x or  x-- 
(-)                         Unary negation          If x is 3, then -x returns -3.
(+)                         Unary Plus              +"3" returns 3.  +true returns 1.
**                          Exponentiation          x**y

*/                          

let x = 3;
let y = 4;
let z = x + y;
console.log(z);


let a = 3;
let b = 4;
let minus = x - y;
console.log(minus);


for (let index = 0; index < 8; index++) {
 console.log('iteration ' + index+1);
}


// Write a program to add two numbers entered by the user.
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(xyz) {
    rl.question("Enter second number: ", function(second) {
        let sum = parseInt(xyz) + parseInt(second);
        console.log("Sum: " + sum);
        // rl.close();
    });
});


// Find the remainder when a number is divided by another.
// Given two numbers, swap them using only arithmetic operations.
// Compute the product of two floating-point numbers.
// Find the quotient and remainder of division between two numbers.
// Calculate the area of a circle given the radius.
// Increment a variable x using both pre-increment and post-increment.
// Decrement a variable y using both pre-decrement and post-decrement.
// Compute the compound interest for given principal, rate, and time.
// Convert temperature from Celsius to Fahrenheit using a formula.
