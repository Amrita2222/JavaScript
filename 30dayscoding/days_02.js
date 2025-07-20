// Activity 1: Arithmetic operation

function addTwoNumbers(num1, num2) {
    const sum = num1 + num2;
    console.log(`Sum: ${sum}`);
  }
  
function subtract(num1, num2) {
    const difference = num1 + num2;
    console.log(`Difference: ${difference}`);
  }

  function multiply(num1, num2) {
    const multiply = num1 * num2;
    console.log(`Multiply: ${multiply}`);
  }

  function divide(num1, num2) {
    const divide = num1 / num2;
    console.log(`Divide: ${divide}`);
  }
  function reminder(num1, num2) {
    const reminder = num1 % num2;
    console.log(`Reminder: ${reminder}`);
  }
  const number1 = 5; 
  const number2 = 10;
  addTwoNumbers(number1, number2);
  subtract(number1, number2);
  multiply(number1, number2);
  divide(number1, number2);

//   Activity 2: Assignment Operators

let x = 10;
x = x + 5;
console.log(`Add: ${x}`);

let y = 30;
y = y - 5;
console.log(`subtract: ${y}`);

// Activity 3: Comparison Operators

let a = 10;
let b = 20;

console.log(`Is a greater than b: ${a > b}`);
console.log(`Is a equal to b: ${a === b}`);
console.log(`Is a grater than equal to b: ${b >= a}`);

// Activity 4: Logical Operators
let positive_num = 4;

if (positive_num > 0 && positive_num % 2 === 0) {
    console.log(`positive and even number ${positive_num}`);
}
else{
    console.log('number either not positive or not even.');
}

let unique_num = 15;

if (unique_num > 0 || unique_num % 2 === 0) {
    console.log(`positive and even number ${unique_num}`);
}
else{
    console.log(`number either not positive or not even:${unique_num}`);
}


// Activity 5: Ternary Operator

let z = -5;

if (z < 0) {
  console.log(`The number is negative`);
} else if (z > 0) {
  console.log(`The number is positive`);
} else {
  console.log(`The number is zero`);
}

