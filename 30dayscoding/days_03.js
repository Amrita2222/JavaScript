// Activity 3 : if-else condition
let num1 = -333;
if(num1 > 0){
    console.log('The number is positive');
}else if(num1 < 0){
    console.log('The number is negative');
}
else{
    console.log('The number is zero');
}

let age = 18;

if (age >= 18) {
    console.log(`Your are eligible ${age}`);
}
else{
    console.log(`You are not eligible: ${age}`);
}
// Activity 2: Nested If-else condition

let a = 5;
let b=10;
let c= 9;

if(a >= b && a >= c){
    console.log(`The largest number is: ${a}`);
}
else if(b >= a && b >= c){
    console.log(`The largest number is: ${b}`);
}
else{
    console.log(`The largest number is ${c}`);
}
//  Activity 3: Switch case

let day = 'Sunday';

switch(day){
    case 'Monday':
        console.log('Day: Monday');
        break;
    case 'Tuesday':
        console.log('Day: Tuesday');
        break;
    case 'Wednesday':
        console.log('Day: Wednesday');
        break;
    case 'Thursday':
        console.log('Day: Thursday');
        break;
    case 'Friday':
        console.log('Day: Friday');
        break;
    case 'Saturday':
        console.log(' Day: Saturday');
        break;
    case 'Sunday':
        console.log('Day:  Sunday');
        break;
    default:
        console.log('Invalid day');
}

let score = 80;

switch(true){
    case score >= 90:
        console.log('Grade: A');
        break;
    case score >= 80:
        console.log('Grade: B');
        break;
    case score >= 70:
        console.log('Grade: C');
        break;
    case score >= 60:
        console.log('Grade: D');
        break;
    default:
        console.log('Grade: F');
        break;
}
// Activity 4 : Conditional (Ternary) Operator 

let num2 = 6;

if(num2 % 2 === 0){
    console.log(`${num2} : even number`);
}
else{
    console.log(`${num2} : odd number`);
}

// Activity 5: Combining Condition 

let year  = 2023;

 let leap_year = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
 console.log(leap_year? `${year} is a leap year` : `${year} is not a leap year`);
