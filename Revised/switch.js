/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */
const month = 3;

switch (month) {
    case 1:
    console.log('January');
    break;
    case 2:
    console.log('Febrary');
    break;
    case 3:
    console.log('march');
    break;
    case 4:
    console.log('April');
    break;
    case 5:
    console.log('May');
    break;
    case 6:
    console.log('june');
    break;    

    default:
        console.log("default case mathc");
        break;
}

const userEmail = 'R@gmail.com';
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

// falsy value : false , 0, -0, BigInt 0n, "",null, NAN


// truthy value : "0", 'false', [], {}, function(){}
if (userEmail.length == 0) {
    console.log("Array is empty");
}

const emptOBJ = {};

if(Object.keys(emptOBJ).length == 0){
    console.log("Object is Empty");
}

// Nullish coalescing Operator (??): null undefine

let value;
// value = 5 ?? 10  output 5
// value = null ?? 10; output 10
// value = undefined ?? 55 // output 55
value = null ?? 10 ?? 50;
console.log(value);



// Tm likho mai kuchh nhi karunga bas aise hi rhunga