// Activity 1: Array creation and Acces
let arrnum =[1,2,3,4,5];
console.log(arrnum);

function arrayList(arr) {
    if (arr.legth === 0) {
        return [];
    }
    let firstnum = arr[0];
    let lastnum = arr[arr.length - 1];

    return [firstnum, lastnum];
}
let arraylist = [2,,6,4,5,46,5];
const result = arrayList(arraylist);
console.log(result);

// Activity 2: Array Method (Basic)
let number = [33,23,54,65,23];
number.push(100);
number.pop();
number.shift();
number.unshift();
console.log(number);

// Activity 3: Array Methods (Intermediate)

let numbers = [22,12,23,34,45,46];
let doble_num = numbers.map(number => number * 2);
console.log(doble_num);

let filter = numbers.filter(number => number % 2 === 0);
console.log(filter);

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`sum of all number in array ${sum}`);

// Activity 4: Array iteration

let arr = [1,2,3,4,5];
for(let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}`);
}

let  arr_num = [1, 2, 3, 4, 5];
arr_num.forEach(number => {
  console.log(number);
});

// Activity 5: Multi-dimensional Arrays
let matrix = [
    [3,2,5],
    [55,33,21],
    [1,2,4]
];
console.log(matrix);







