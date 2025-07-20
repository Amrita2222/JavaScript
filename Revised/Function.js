// Write a function to add two numbers.

function addNumber(number1 , number2){
    let result= number1 + number2
    return result;
}

let addnumber = addNumber(2,4)

console.log("Result :" , addnumber);
// Write a function to multiply two numbers.
function multiply(number1 , number2){
    return   number1 * number2;
}
let product = multiply(2,4)
console.log("Result :" , product);

// Write a function to find the factorial of a number.

function factorial(n){
    if(n === 0 || n=== 1){
        return 1;
    }
    else{
        return n*factorial(n-1)
    }

}
let number = 5
console.log(`Factorial of ${number} is ${factorial(number)}`)

// Write a function to check if a number is prime.

function prime(anyvalue){
    if(anyvalue  <= 1){
        return false;
    }
    for (let index = 2; index < Math.sqrt(anyvalue); index++) {
        if(anyvalue % index === 0){
            return false;
        }
      
        
    }
    return true
}
let primenumber = 120;
console.log(`prime number ${primenumber} is ${prime(primenumber)}`)
// Write a function to reverse a string.
function reverse(str){
    return str.split("").reverse("").join();
}
let originalString = "Amrita";
let reverseString = reverse(originalString);

console.log(`original: ${originalString}`);
console.log(`reversed : ${reverseString}`);


// Write a function to find the maximum of three numbers.
function findMax(a,b,c){
    return Math.max(a,b,c);
}

const num1 = 1;
const num2 = 5;
const num3 = 10;
const maxFind = findMax(num1,num2,num3);
console.log(`The maximum of three numbers ${maxFind}`);
// Write a function to calculate the area of a circle.
function clculateCircle(radius){
    return Math.PI*radius*radius;
}
const radius = 21;
const area = clculateCircle(radius)
console.log(`the area of a circle ${area}`)

// Write a function to convert Celsius to Fahrenheit.
function converCelsius(Celsius){
    return (Celsius* 9/5)+ 32;
}
const Celsius = 30;
const Fahrenheit = converCelsius(Celsius);
console.log(`convert Celsius to Fahrenheit ${Fahrenheit}`);

// Write a function to find the sum of an array of numbers.
function sumArray(numbers){
    return numbers.reduce((accomulator, currentValue) => accomulator+currentValue,0);
}

const numbers = [1,2,3,4,5,6];
const sumarrayvalue = sumArray(numbers);
console.log(`the sum of an array of numbers ${sumarrayvalue}`);
// Write a function to find the longest word in a string.
function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const sentence = "The quick brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log("The longest word is:", longestWord);
