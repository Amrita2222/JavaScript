let name = 'Rita';
let department = 'mca';

// console.log(`hello my name is ${name} and my department is ${department}`);

let number = new String('rita');
// console.log(number.__proto__);

// String length

    let length = new String('Amrita');
    // console.log(length.length);

// String slice() : The method takes 2 parameters: start position, and end position (end not included).

let arrayList = ['3', '8', '2', '9', '12', '10']; 
// console.log(arrayList.slice(0, 3)); // (star, end) => end excluded

// String substring() : substring is s almost similar to slice()
// it will not take negative value but slice takes negative value yes
// if you will give negative value then it will treat as zero

let str = "Hello World!";
console.log(str.substring(0, 3)); // (start, end) => end is excluded

// String substr() substr() is also similar to slice()
// substr() it takes start and length of 
//  but second parameter l extracted part

// String replace()

// replace() method replaces a specified value with another value in a string
// it return a new String
// It method replaces only the first match

let cardboard = 'Please submit your assignment';
let cardboard2 = cardboard.replace('assignment', 'document');
console.log(cardboard2);

// String replaceAll()
let doc1 = 'Please submit your assignment';
let doc2 = doc1.replaceAll('assignment', 'Please submit your assignment' );
console.log(doc2);
// String toUpperCase() : 

let uppercase = new String('amrita');
// console.log(uppercase.toUpperCase());

// String toLowerCase() :

let lowercase = new String('amrita');
// console.log(uppercase.toLowerCase());

// String concat()

// String trim()

// String trimStart()

// String trimEnd()

// String padStart()

// String padEnd()

// String charAt()
let charAt = new String('amrita');
// console.log(charAt.charAt(2));

// String charCodeAt()

// String split()

// indexOf()

let indexOf = new String('amrita');
// console.log(uppercase.indexOf('m'));

