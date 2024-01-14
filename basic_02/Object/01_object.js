// Create a Object in 
// Singleton

// Object literals
Object.create  //constructor methos

let mysym = Symbol('Key1');
let jsuser = {

            name : "Rita" ,
            'full name':  "Rita Kumari",
            age:23,
            [mysym]: "mykey1",
            location:'patna',
            email: "amrita.spj2222@gmail.com",
            isLoggedIn : false,
            lastloginDays: ["Monday", "Saturday"]
};

// console.log(jsuser.email);
// console.log(jsuser['email']);
// console.log(jsuser[mysym]);


// jsuser.email = 'ritakri123p@gmail.com'
// Object.freeze(jsuser);
// console.log(jsuser);
jsuser.greeting = function(){

            console.log("Hello Js User");
};
console.log(jsuser.greeting);