/*
1. Control Flow
Write a program to print numbers from 1 to 10 using a for loop.
*/

for (let index = 1; index <= 10; index++) {
    console.log(index);
}

// Write a program to print the even numbers from 1 to 20 using a for loop.

for (let index = 1; index <= 20; index++) {
    if(index % 2 === 0)
        console.log(`even number 1 to 20 = ${index}`)
}

// Write a program to print numbers from 10 to 1 using a while loop.
for (let number = 10;   number >= 1; number--) {
    console.log(number);  
}

// Write a program to sum the numbers from 1 to 100 using a for loop.

let number = 0;
for (let i = 0; i < 100; i++) {
    number = number + i;
}
// console.log(number);

// Write a program to find the factorial of a number using a while loop.

let factorial = 5;

for (let fac = 1; fac <= 4; fac++) {
    factorial = factorial * fac;
}
console.log(factorial);

// Write a program to check if a number is prime using a for loop.

let prime = 30;
let isPrime = true; 

if (prime <= 1) {
    console.log(`${prime} is not a prime number.`);
} else {
    for (let j = 2; j <= Math.sqrt(prime); j++) {
        if (prime % j === 0) {
            isPrime = false; 
            break; 
        }
    }

    if (isPrime) {
        console.log(`${prime} is a prime number.`);
    } else {
        console.log(`${prime} is not a prime number.`);
    }
}

// Write a program to print the first 10 Fibonacci numbers using a for loop.

let num1=0;
let num2=1;
let count = 10;
console.log("fibonacci"+ ' ' + num1)
console.log(`fibonacci num ${num2}`);

for(let  i = 3; i <= count;  i++){
    let nextTerm = num1 + num2; 
    console.log(nextTerm); 
    num1 = num2; 
    num2 = nextTerm;
}

// Write a program to print "Hello World" 5 times using a while loop.
let countnum = 1;
while (countnum <= 5) {
    console.log('Hello World');
    countnum++;
}

// Write a program to find the greatest common divisor (GCD) of two numbers using a loop.
   
// Write a program to reverse a number using a while loop.

let greatest = 1233456789;
let reverseNum = 0;

while(greatest > 0){
    let lastdigit = greatest % 10;
    reverseNum = reverseNum * 10 + lastdigit;
    greatest= Math.floor(greatest / 10)
}
console.log(`reverse Number = ${reverseNum}`);




