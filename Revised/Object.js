

// Revision Object

// singleton


// object literals
let jsuser = {
    name: 'Rita',
    'full name': 'Rita Kumari',
    age: 24,
    location: 'Patna',
    email: 'amrita.spj2222@gmail.com',
    // [mysum]: 'djfhdjkf',
    isLoggined: false,
    lastLogined: ['Monday', 'Saturday']
}
console.log(jsuser.email);
console.log(jsuser);
console.log((jsuser["full name"]));

// symbol merepresent krna ho toh 
// console.log(jsuser[mysum]);

jsuser.greeting = function() {
    console.log('Hello Rita');
}
console.log(jsuser.greeting())

jsuser.greetingTwo = function() {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(jsuser.greetingTwo())

///////////////////////////////////////////////////

// const tinderuser = new Object()

const tinderUser = {}

tinderUser.name = 'Rita Kumari'
tinderUser.id = '123455'
tinderUser.loggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'amrita.spj2222@gmail.com',
    fullName:{
        userFullName:{
            name:'Rita',
               lastname: 'Kumari'
        } 
     
    }

}
// console.log(regularUser.fullName.userFullName.name);

const obj1 ={
    1: 'a',
    2: 'b'
}
const obj2 ={3:'c', 4:'d'}
// const ojb3 = {obj1, obj2}
// const ojb3 =Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

//Database se value aati hai toh object ko kese create kre
const user = [
    {
       id : 1,
       email: 'amrita.spj2222@gmail.com'
    },
    {
        id : 1,
        email: 'amrita.spj2222@gmail.com'
     },
     {
        id : 1,
        email: 'amrita.spj2222@gmail.com'
     },
     {
        id : 1,
        email: 'amrita.spj2222@gmail.com'
     }

]
console.log(user[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructured
const course ={
    courseName: 'Js in Hindi',
    prize: '999',
    courseInstructor: 'Rita'
}

const {courseInstructor : instructor} = course
console.log(courseInstructor);
console.log(instructor);


const navbar = ({company}) =>{

}

// APi concept 
/*
{
    'name': 'Rita',
    'course': 'jsin hindi',
    'prize': 'free'
}
    */
   







