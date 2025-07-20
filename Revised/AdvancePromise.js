// Promise API

                            // settled means
        // resolve                                  // reject
        // Success                                  // failure
        // Fullfilled                               // rejected
        

        
// jao ab
// Todo bna lo phle usse tmhe create edit aur delete smjh me aa jayega
// usme DB use hoga yaa aise hi
// Db nhi hoga use
// Agr tmhe save krna h to local strorage padh lena usse tmhara browser me save hoga
// Padhna to - local strorage har browser me kuchh space hota h use me save krta h
// toh mujhe phle local storage dekhna hoga naaa
 

















// Promise.all([p1, p2, p3]) and p1 takes 3 seconds and p2 takes 2 seconds and p3 takes 1 seconds overall it will take 3 second to complete itself if all are sucess.It will return the array of success.  And this array of Promise it iterable


// const promise1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
// const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 rejected'), 1500));

// Promise.all([promise1, promise2, promise3])
//     .then((results) => {
//         console.log('All promises resolved:', results);
//     })
//     .catch((error) => {
//         console.error('One of the promises rejected:', error);
//     });



// Promise.all([p1, p2, p3]) and p1 takes 3 seconds and p2 takes 2 seconds and p3 takes 1 seconds and any of them is failed then it will give an error whatever the error from any promise returned and it will give the error in that second which give. It will not wait for other promises to complete.




// Promise.allSettled([p1, p2, p3]) and p1 takes 3 seconds and p2 takes 2 seconds and p3 takes 1 if any of them is failed then it will wait for other promises to complete or settled. The failed promise will be give error and other will be returned their value.

// const p1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
// const p2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 rejected'), 1500));

// Promise.allSettled([p1, p2, p3])
//     .then((results) => {
//         console.log('All promises settled:');
//         results.forEach((result, index) => {
//             console.log(`Promise ${index + 1}:`, result);
//         });
//     });



// Promise.race([p1, p2, p3]) and p1 takes 3 seconds and p2 takes 2 seconds and p3 takes 1 it will take the fastest one. It will not wait for other promises to complete.If the promise which take less time and give error then it will returned the error of first settled promise.


// const pr1 = new Promise((resolve) => setTimeout(() => resolve('Promise 1 resolved'), 1000));
// const pr2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
// const pr3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 rejected'), 1500));

// Promise.race([pr1, pr2, pr3])
//     .then((result) => {
//         console.log('The race was won by:', result);
//     })
//     .catch((error) => {
//         console.error('The race was lost by:', error);
//     });




// Promise.any([p1, p2, p3]) p1 takes 3 seconds and p2 takes 2 seconds and p3 takes 1 second. It will wait till the first one to settled. If all promises are failed then it will return the aggregate error of all the promises i.e array of error.


// const promises1 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 1 rejected'), 1000));
// const promises2 = new Promise((resolve) => setTimeout(() => resolve('Promise 2 resolved'), 2000));
// const promises3 = new Promise((resolve, reject) => setTimeout(() => reject('Promise 3 rejected'), 1500));

// Promise.any([promises1, promises2, promises3])
//     .then((result) => {
//         console.log('First promise to resolve:', result);
//     })
//     .catch((error) => {
//         console.error('All promises were rejected:', error);
//     });







// Real life Example
    

// Example for Promise.all

// Function to fetch user data
// function fetchUserDetails() {
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then(response => response.json());
// }

// // Function to fetch user posts
// function fetchUserPosts() {
//     return fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
//         .then(response => response.json());
// }

// // Function to fetch user comments
// function fetchUserComments() {
//     return fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
//         .then(response => response.json());
// }

// // Using Promise.all
// Promise.all([fetchUserDetails(), fetchUserPosts(), fetchUserComments()])
//     .then(([userDetails, userPosts, userComments]) => {
//         console.log('User Details:', userDetails);
//         console.log('User Posts:', userPosts);
//         console.log('User Comments:', userComments);
//     })
//     .catch(error => {
//         console.error('Failed to fetch data:', error);
//     });





//  // Promise.allSettled

//     // Function to fetch data from API 1
// function fetchData1() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json());
// }

// // Function to fetch data from API 2
// function fetchData2() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/2')
//         .then(response => response.json());
// }

// // Function to fetch data from API 3
// function fetchData3() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/3')
//         .then(response => response.json());
// }

// // Using Promise.allSettled
// Promise.allSettled([fetchData1(), fetchData2(), fetchData3()])
//     .then(results => {
//         results.forEach((result, index) => {
//             if (result.status === 'fulfilled') {
//                 console.log(`Operation ${index + 1} succeeded:`, result.value);
//             } else {
//                 console.log(`Operation ${index + 1} failed:`, result.reason);
//             }
//         });
//     });





    // Promise.race

// Function to fetch data (simulate slow fetch)
function fetchSlowData() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json());
}

// Timeout function
function timeout() {
    return new Promise((_, reject) => {
        setTimeout(() => reject('Request timed out'), 3000); // 3 seconds timeout
    });
}

// Using Promise.race
Promise.race([fetchSlowData(), timeout()])
    .then(result => {
        console.log('Fetch result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });







// Promise.any

// Function to fetch from Source A
// function fetchFromSourceA() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/1')
//         .then(response => response.json());
// }

// // Function to fetch from Source B
// function fetchFromSourceB() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/2')
//         .then(response => response.json());
// }

// // Function to fetch from Source C
// function fetchFromSourceC() {
//     return fetch('https://jsonplaceholder.typicode.com/posts/3')
//         .then(response => response.json());
// }

// // Using Promise.any
// Promise.any([fetchFromSourceA(), fetchFromSourceB(), fetchFromSourceC()])
//     .then(result => {
//         console.log('First promise to resolve:', result);
//     })
//     .catch(error => {
//         console.error('All promises were rejected:', error.errors); // Error contains an errors array
//     });
