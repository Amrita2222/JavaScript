// if 

let isUserlogged = true
let temperature = 41


if (temperature === 40) {
            console.log("less than 50");
}
else{
            console.log("temperature is greater than 50");
}

//  < , >, =>, >=, !=, ===, !==


const score = 200;
if(score > 100){
            const power = "fly"
            console.log(`user power : ${power}`);
}

// console.log(`user power : ${power}`); //Block Scope

// Short hand notation

let blance = 1000;
// if(blance >500) console.log("test"),console.log("test2");

if (blance < 500) {
            console.log("less than");
} else if(blance <750){
            console.log("less than 750");
}
else if(blance <900){
            console.log("less than 900");
}
else{
            console.log("less than 1200")
}


let userloggedin = true;
let debitcard = true;
let loggedingoogle = false;
let loggedinfromemail = true;

if (userloggedin && debitcard && 2 == 2) {
            console.log("Allow to by course");
}

if(loggedinfromemail || loggedingoogle ){
            console.log('user logined in')
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10
val1 = undefined ?? 20


console.log(val1)


let months =3;

switch (months) {
            case 1:
                     console.log("jnauary");              
                        break;
             case 2:
                     console.log("Fed");              
                        break;
             case 3:
                        console.log("March");              
                           break;
            case 4: 
                        console.log("Apr")
            default:
                        console.log("default value");
                        break;
}

// Truth and False Value

let usernameEmail = "fkgfgjk@gmail.com";
if(usernameEmail){
            console.log("Got the User Email");
}
else{
            console.log("Don't have User Email");
}


// Falsy Value                                  Truth Value
            // 1.  false                        1. "0"
            // 2. 0                             2. 'false'
            // 3. -0                            3. " "
            // 4. BigInt 0n                     4. []
            // 5. ""                            5. {}
            // 6. null                          6. function(){}
            // 7. undefined
            // 8. Nan

// Check the Empty Array
            if(usernameEmail.length===0){
                        console.log("Array is Empty");
            }

// Check Empty Object
let emptyobj ={}
            if(Object.keys(emptyobj).length === 0) {
                        console.log("Object is empty");
            }
