// Write a program to get the current date and time.
let newDate = new Date()
let date = newDate.toLocaleDateString()
let time = newDate.toLocaleTimeString()

console.log( ` current date : ${date}`)
console.log(`Current time : ${time}`)
// Write a program to format a date as YYYY-MM-DD.
let date1 = new Date();
let currentformate = date1.toISOString().split('T')[0]
console.log(`date as YYYY-MM-DD ${currentformate}`);

// Write a program to find the difference in days between two dates.

let date2 = new Date("2024-12-01");
let date3 = new Date("2024-12-03");
let timeDifference = date3 - date2;
let differenceInDays = timeDifference / (1000 * 60 * 60 * 24);
console.log(`difference is ${differenceInDays}`);  
