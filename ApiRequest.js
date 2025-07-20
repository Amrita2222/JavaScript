
  /*  const requestUrl = 'https://api.github.com/users/hiteshchoudhary';
    const xhn = new XMLHttpRequest();
    xhn.open('GET', requestUrl);
    xhn.onreadystatechange = function() {
        console.log(xhn.readyState); // Log the readyState for debugging
        if (xhn.readyState === 4) { // Check the HTTP status
            const data = JSON.parse(this.responseText); // Use JSON.parse to parse the response
            console.log(data);
            console.log(data.followers); // Access and log the 'followers' property
        }
    };
    xhn.send();

*/

// <!-- State
// UNSEND              0
// OPENED              1
// HEADER_RECEIVED     2
// LODING              3
// DONE                4
// -->

/* Promise: In JavaScript, a Promise is an object that represents the eventual completion 
 (or failure) of an asynchronous operation and its resulting value. Promises provide a more elegant 
 and readable way to handle asynchronous code compared to traditional callback functions.
/* Why Use Promises?
Readability: Avoids "callback hell" by chaining .then() calls.
Error Handling: Centralized and more structured error handling using .catch().
Chaining: Easily chain multiple asynchronous operations.
*/

/* Using a Promise
To handle the result of a promise, use .then(), .catch(), and optionally .finally():

.then(): Called when the promise is fulfilled.
.catch(): Called when the promise is rejected.
.finally(): Called after the promise is settled (fulfilled or rejected).
*/

/* 
States of a promise
A Promise can have one of three states:
1. Pending: The initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
3. Rejected: The operation failed, and the promise has a reason for the failure (an error).

*/

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB call
    // Cryptography
    // network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000);
});

// consumption

promiseOne.then(function(){
    console.log('Promise consumed');
    
})   // ek call back milta hai
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task two");
        resolve();
    }, 1000)
}).then (function(){
    console.log('async 2 resolved')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log();
        resolve({
            name: 'Rita',
            userEmail: 'javascript@gmail.com'
        })    
    }, 1000);
})

promiseThree.then(function(user){
console.log(user);

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                username: 'Rita Kumari', email: 'abc123@gmail.com'
            });
        }
        else{
            reject('Error: Something went wrong');
        }
    }, 1000);
})

promiseFour.then((user) =>{
    console.log(user);       // Logs the resolved value
    return user.username; 
    
})
.then((username) => {
console.log(username);       // Logs the username

})
.catch(function(error){      // Pass the error as an argument
    console.log(error)      // Correctly logs the error message
})

.finally(() => {
console.log('The Promise is resolved or rejected');

})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                username: 'Amrita Kumari', password: '123'
            })
        }
        else{
            reject('ERROR: Javascript went worng');
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promiseFive      // Fixed the typo in 'promiseFive'
        console.log(response)
    }catch(error){
        console.log(error);     // Logs the error if the promise is rejected
        
    }
}

consumePromiseFive();       // Call the async function



async function getAllUser() {
   try{
    const   response = await fetch('https://api.github.com/users/hiteshchoudhary')
    // console.log(response);
    
    const data = await response.json();
    console.log(data);
   }
   catch(error){
        console.log("E ,", error);
   }
}
getAllUser(); 

// use any one upper function promiseFive  or this
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
console.log(data);
})
.catch((error) =>{
    console.log(error); 
})



