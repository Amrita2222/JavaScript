// Write a program to create an array of numbers from 1 to 10.
    let number = []
    for (let index = 1; index <= 10; index++) {
        number.push(index)
    }
    console.log(number)
// Write a program to find the length of an array.
    let array = [1,3,5,22,8,55,3,5,6,7]
    let arrayLenght = array.length;
    console.log(`Lenght is ${arrayLenght}`);
    
// Write a program to access the first and last elements of an array.
let firstElement = array[0];
let lastElement = array[array.length -1]
console.log(`The first element is  ${firstElement} and second element is ${lastElement}`);

// Write a program to add an element to the end of an array.
let oldArray = [10,20,30,40]

oldArray.push(50)
console.log(`add element to the end is ${oldArray}`);

// Write a program to add an element to the beginning of an array.
    oldArray.unshift(5)
    console.log(`add element to the beginning ${oldArray} `)
// Write a program to remove the last element from an array.
    oldArray.pop()
    console.log(`remove element to the last ${oldArray} `)
// Write a program to remove the first element from an array.
    let firstarray= [20,40,60,80]
    firstarray.shift()
    console.log(`remove the first element from an array ${firstarray}`)
// Write a program to sort an array of numbers in ascending order.
let sortarray = [2,4,6,54,6778,,5,3,6,34,4]
sortarray.sort((a,b) => a - b)
console.log(`sort an array of numbers in ascending order ${sortarray}`);
// Write a program to find the sum of all elements in an array.

let sum = sortarray.reduce((total, num) => total + num)
console.log(`sum of all elements in an array ${sum}`)
// Write a program to find the largest number in an array.
let value = [3,6,4,7,8,7,33,77,22,11]
let largest = Math.max(...value)
console.log(`the largest number in an array : ${largest}`);


// Revised all Properties 

// length : The length property returns the length (size) of an array.
let letter= ["Banana", "Orange", "Apple", "Mango"];
console.log(letter.length);

// toString : The JavaScript method toString() converts an array to a string of (comma separated) array values.
let fruit = ["Banana", "Orange", "Apple", "Mango"];
let tostring = fruit.toString();
console.log(tostring);

//at : The at() method returns an indexed element from an array.
let atArray = ['abc', 'def', 'ghi', 'jkl', 'mno'];
let atarrays = atArray.at(4);
console.log(atArray.at(3));
console.log(atarrays);

// join : The join() method also joins all array elements into a string.
let veg = ['carrot', 'potato', 'tomato', 'peas', 'beans'];
let vegResult = veg.join('Array');
console.log(`Join letter: ${vegResult}`);

// pop : The pop() method removes the last element from an array
let popelement = ['123', '234', '456', '678'];
let popResult = popelement.pop();
console.log(popResult);

// push : The push() method adds a new element to an array (at the end).
let pushResult = ['Rita', 'Ranjeet', 'Amrita',  'Geeta'];
pushResult.push('Rina');
console.log(pushResult);

// shift : The shift() method removes the first array element and "shifts" all other elements to a lower index.
let shiftResult = ['cartoon', 'serial', 'movies', 'horror', 'short', 'reels'];
shiftResult.shift();
console.log(shiftResult);

// unshift : The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
let unshift = ['lemon', 'carrot', 'orange', 'brinjal'];
unshift.unshift('Rita')
console.log(unshift);

// concat : The concat() method creates a new array by merging (concatenating) existing arrays:
//  (Merging Two Arrays)
let language = ['c', 'java', 'c++', 'python', 'JS', 'Ruby'];
let code = ['df', 'df', 'fg', 'fd', 'fd']
let concat = language.concat(code);
console.log(concat);

// flat : The flat() method creates a new array with sub-array elements concatenated to a specified depth
let flat = language.flat()
console.log(flat);

// splice : The splice() method adds new items to an array.
let splice=  ["Banana", "Orange", "Apple", "Mango"];
splice.splice(0, 2, "Lemon", "Kiwi");
console.log(splice);

// slice : The slice() method slices out a piece of an array.
