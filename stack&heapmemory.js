// Stack (primitive) => copy of memory

let firstvalue = 'ritakri12pgmail.com';
let secondvalue = firstvalue;
secondvalue= 'amrita.spj@gmail.com';
console.log(firstvalue);
console.log(secondvalue);


// heap (Non-primitive) => Original value ka reference
let userone= {
    name:'rita',
    age: 22,
}

let usertwo =userone;
usertwo.name = 'amrita';

console.log(usertwo.name);
console.log(userone.name);