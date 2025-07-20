// Write a program to check if a number is even or odd.

let number1 = 10;
if(number1 %2 == 0){
    console.log(` ${number1} even number `)
}
else{
    console.log(` ${number1} is odd  number`)
}

// Write a program to find the largest of three numbers.

let num1 = 33; let num2= 21; num3= 44;
if (num1 >= num2 && num1 >= num3) {
    console.log(`The largest number is ${num1}`);
}
else if(num2 >= num1 && num2 >= num3){
    console.log(`The largest number is ${num2}`);
}
else{
    console.log(`The largest number is ${num3}`);
}
// Write a program to find the smallest of three numbers.
if (num1 <= num2 && num1 <= num3) {
    console.log(`The smallest number is ${num1}`);
}
else if(num2 <= num1 && num2 <= num3){
    console.log(`The smallest number is ${num2}`);
}
else{
    console.log(`The smallest number is ${num3}`);
}

// Write a program to convert a number to a string.

let newNumber = 2345;
let stringnumber= new  String(newNumber);
console.log(stringnumber);


// Write a program to find the square root of a number.
let number = 100; 
let squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is =  ${squareRoot}`);

// Write a program to generate a random number between 1 and 10.
let max = 10;
let randomvalue = Math.random() * max
console.log(randomvalue)

// Write a program to round a number to the nearest integer.
let number2 = 3.7
let nearest = Math.round(number2)
console.log(`nearest integer is ${nearest}`)

// Write a program to find the absolute value of a number.
let number3 = -3.7
let absolutebalue = Math.abs(number3)
console.log(`nearest integer is ${absolutebalue}`)
// Write a program to find the sum of digits of a number.
let sum = 123456789;
let sumOfDigits = sum.toString().split('').map(Number).reduce((acc, digit) => acc + digit, 0);
console.log(`sum of Digit ${sumOfDigits}`);

// Write a program to find the cube of a number.
let number4 = 4;
let cube = Math.pow(number4, 5)
console.log(`the cube of a number ${cube}`);

// let cubeResult = number4 ** 3

