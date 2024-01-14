// Array Method
let value = [1,2,3,4,5,6];
console.log(value[0]);
// value.push(0);   //Appends new elements to the end of an array, and returns the new length of the array.
console.log(value);

// value.pop(); //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified
value.unshift(8);
value.shift();

// console.log(value.includes(5));
// console.log(value.indexOf(5));

// const newarr = value.join();
// console.log(typeof newarr);

// ***********************//

const marvel_heros = ['thor', 'Ironman', 'spiderman'];
const dc_heros = ['superman', 'flash', 'batman'];

// let allhero = marvel_heros.concat(dc_heros);
// console.log(allhero);

let  all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

let another_array = [1,2,3,[4,5,6,],7,[8,9,[0]]];
let real_another_array = another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray('Rita'));
console.log((Array.from("Rita")));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));