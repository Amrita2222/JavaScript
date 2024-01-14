// let  tinderuser = new Object();   // It is a singleton Object
let tinderuser = {} // It is a Non-singleton object;

tinderuser.id ="13gjhl"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn =false
// console.log(tinderuser);


let regularuser = {
            email: 'ghdfkjg@gmail.com',
            fullname: {
                        userfullname: {
                                    firstname: 'Rita',
                                    lastname: 'Kumari'
                        }
            }
}
// console.log(regularuser.fullname.userfullname);

let obj1 = {1:'a', 2: 'b'}
let obj2 = {3: 'a', 4: 'b'}
// let obj3 = {obj1 ,obj2};

let obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);



let users = [
            {
                        id: 1,
                        email: 'hgkj@gmail.com'
            },
            {
                        id: 1,
                        email: 'hgkj@gmail.com'
            }, 
            {
                        id: 1,
                        email: 'hgkj@gmail.com'
            }
];

users[1].email;
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object)

