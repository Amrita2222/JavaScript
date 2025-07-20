// for of 
// ["", "", "",""]
// [{}, {}, {}]  object under the array

const arr = [1,2,3,4,5]
for(const num of arr){
console.log(num);
}

let greeting = "Hello Rita!";
for(const greet of greeting){
            console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India", "United States of America")
map.set('Fr', "France");
console.log(map);


for(const [key, value] of map){
            
}