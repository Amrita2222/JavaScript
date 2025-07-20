let array = [12,4,5,89,0];

let result = array.map(element => element *2);
console.log(result);



let addarr = [1, 2, 3, 4, 5];
let sum = addarr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum); 


let evenarr = [1, 2, 3, 4, 5,44,65,434,4,22,66,111];
let initialvalue = [];

let even = evenarr.reduce((accumulator, currentValue, index) => {
    if(currentValue % 2 === 0){
        accumulator.push(index);
    }
    return accumulator;
}, initialvalue);
console.log(even); 

