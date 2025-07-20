// Data type

// 1. Primitive Data Type (Call by value)
// Data type : Number, String, Boolean , Null, Undefine, Symbol(unique value), BigInt(Scientific value)

let number = 33;
let stringvalue = 'adc';

let booleanvalue = false;

let outsideTemp = null;
const id = Symbol('123');
const anotherID = Symbol('123');
console.log(id === anotherID);

// 2. Non-primitive Data Type (Call by reference)
// Data type :Array, Link List, Object, Function

// JavaScript is a dynamically typed language. Because data type will automatically
//  assigned at the time of compilation or code execution.

let listoffruits = ['mango', 'apple', 'ornage', 'papaya'];
console.log(listoffruits);

let object = {
    name: "rita",
    age: 22
}
console.log(object);

let myfinction = function () {
    console.log()
}

/* primitive data type has 7 type
Number = number , 
String = string,
Boolean = Boolean,
understand = object, 
symbol=symbol,
bigint=number,
null = object.
Non primitive
Array, object, function */


const obj1 = {
    name: "rita",
}
const obj2 = {
    name: "rita",
}
console.log(obj1 === obj2);

// type coercion
     
console.log(10 == "10");
console.log("5" + 2); //string concatenationss
console.log('5' - 1);   // string converted to number
console.log(true +1);   // true converted to 1


let str = "123";
let num = Number(str); // Converts string to number
console.log(num); // Output: 123

