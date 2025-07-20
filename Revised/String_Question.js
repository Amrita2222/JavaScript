
// String
// Write a program to concatenate two strings.
let str1 = 'Rita'
let str2 = 'Kumari'
let str3 = str1.concat(str2);
console.log(str3);


// Write a program to find the length of a string.
let username = 'Rita Kumari';
console.log('The length is ' + username.length)

// Write a program to convert a string to uppercase.
console.log(username.toUpperCase())
// Write a program to convert a string to lowercase.
console.log(username.toLowerCase())
// Write a program to check if a string contains a substring.
    let value1 = 'Hello world!'
    let value2= 'Ram'

    let result = value1.includes(value2);
    if (result) {
        console.log(`The String ${value1} contains the substring ${value2}`);
    }
    else{
        console.log(`The String ${value1} is not contains the substring ${value2}`);
    }


// Write a program to split a string by spaces.
const mainString = "Hello, world!"; 
const subString = "world";
const parts = mainString.split(subString); 
if (parts.length > 1) 
    { console.log(`The string "${mainString}" contains the substring "${subString}".`);
 }
 else { 
    console.log(`The string "${mainString}" does not contain the substring "${subString}".`); 
}

// Write a program to replace a word in a string.
let str = 'visit my website';
let oldWord = 'visit';
let newWord = 'welcome';

let updatedStr = str.replace(oldWord, newWord);
console.log(updatedStr);

// Write a program to reverse a string.
let reversedStr = str.split('').reverse().join('');
//  reversedStr = str.split('')
console.log(reversedStr);

// Write a program to check if a string is a palindrome.

// Write a program to find the index of a character in a string
let alpha = "abcdefghij";
let searchCharacter = 'd';
let index = alpha.indexOf(searchCharacter);

if (index !== -1) {
    console.log(`The character "${searchCharacter}" is found at index ${index}.`);
} else {
    console.log(`The character "${searchCharacter}" is not found in the string.`);
}

