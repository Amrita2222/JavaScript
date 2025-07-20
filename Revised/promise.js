// Promise-related Questions:
// What is a Promise in JavaScript?

/*
A Promise in JavaScript is an object that represents the eventual completion
 (or failure) of an asynchronous operation and its resulting value.
 It has three state.
*/ 

// Explain what a Promise is and its states (pending, resolved, and rejected).
// How do you create a basic Promise in JavaScript?
const respnse =new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve('Promise is success');
    }
    else{
        reject('error');
        
    }
})

respnse
.then((message) => {
    console.log('Hello world', message);
})
.catch((error) => {
    console.log(error, " somethingwent worng");
    
})

// Write a simple Promise that resolves with a value.
// How can you handle the result of a resolved Promise?
    const simplePromise = new Promise((resolve, reject) => {
        const islogin = true;
        if(islogin){
            resolve('Promise resolve successfully');
        }
        else{
            reject('Promise Rejected');
        }
    })

    simplePromise
    .then((login) => {
        console.log('resolve', login);
    })
    .catch((error) => {
        console.log('reject', error)
    })
    .finally(() => {
        console.log("Promise has been settled."); // This will always run
    });

// Use .then() to handle the resolved value of a Promise.
// What is the difference between .then() and .catch()?
const handlePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve succesfully welcome');
    }, 1000);
})
handlePromise.then((result) => {
    console.log(result)
})
/*.then():
1. Used to handle the resolved value of a Promise.
2. It runs when the Promise is successfully fulfilled.

.catch()
1. Used to handle errors or the rejection of a Promise.
2. It runs when the Promise is rejected
 */

// Explain how .then() is used for success and .catch() for error handling.
const successPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Random success or failure
    if (success) {
        resolve("Success promise resolved!");
    } else {
        reject("Failure promise rejected!");
    }
});

successPromise
    .then((value) => {
        console.log("message true:", value);
    })
    .catch((error) => {
        console.log("message false:", error);
    });

// How can you chain multiple .then() statements together?
const multithen = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
multithen
.then((value) => {
    console.log("First then:", value); // Output: 10
    return value * 2;
})
.then((value) => {
    console.log('second then',value);
    return value + 30;
})
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error, "Error");
})
// Write code that chains multiple .then() methods to handle multiple stages of data processing.
// What happens if a Promise is rejected?

// Explain the behavior of an asynchronous function returning a Promise.

// How do async functions return Promises, and what is the syntax for handling them?
// What is the Promise.all() method, and when would you use it?

// Demonstrate how to use Promise.all() to execute multiple Promises in parallel.
// What is the Promise.race() method, and how is it different from Promise.all()?

// Compare Promise.race() with Promise.all() in terms of behavior.




// Fetch-related Questions:
// What is the Fetch API in JavaScript?

// Explain the Fetch API and its basic usage for making network requests.
// How do you use fetch() to make a GET request?

// Write a simple example of using fetch() to retrieve data from a URL.
// How do you handle the response from a fetch() request?

// Demonstrate how to use .then() to process the response from a fetch() call.
// How do you handle errors in a fetch() request?

// Show how to use .catch() or try/catch with async/await for error handling in fetch().
// What is the difference between the response.json() and response.text() methods in fetch()?

// Explain when to use each method when processing a response from a fetch() request.
// How do you use fetch() to send a POST request with JSON data?

// Write an example of how to send JSON data using fetch() with a POST method.
// What is the headers option in fetch() used for?

// Demonstrate how to use custom headers in a fetch() request.
// How can you handle HTTP status codes in fetch()?

// Explain how to check the status of a response to ensure it was successful.
// What is the purpose of the abort() method in fetch()?

// Explain how to cancel an ongoing fetch() request using the AbortController.
// How do you use async/await with fetch() to handle asynchronous code?

// Write a simple example using async/await to make a fetch() request and handle the response.



// Promise-related Questions:
// Create a Promise that resolves after 2 seconds with the message "Hello, World!"
    const showMessage = new Promise((resolve , reject) =>{
        setTimeout(() => {
            resolve('Hello world');
        }, 3000);
    });

    showMessage.then((value) => {
        console.log(value);
    })
    .catch((error) =>{

        console.log(error, 'error');     
    })
// Write a function that returns a Promise which rejects with an error message after 3 seconds.
    const rejectPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('reject Promise after 3 min');
        }, 3000);
    });
    
    rejectPromise.then((value) => {
        console.log('hii', value);
    })
    .catch((error) => {
        console.log('catch error', error);
    })


// Create a Promise that resolves with a number, and use .then() to multiply that number by 2.
const numberPromise = new Promise((resolve) => {
    resolve(5);
});

numberPromise.then((number) =>{
    return number *2;
})
.then((result) => {
    console.log(result, 'is Result');
})
// Write a function that returns a Promise that resolves after 1 second and use .then() to log the result to the console.
function resolveAfterOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved after 1 second');
        }, 1000); // Delay of 1 second
    });
}

resolveAfterOneSecond()
    .then((result) => {
        console.log(result); 
    });

// Write a Promise chain that first resolves with "Starting..." then "Processing..." and finally "Finished!"
const promiseChain = new Promise((resolve) => {
    resolve('Starting...');
});

promiseChain.then((message) => {
    console.log(message);
    return 'Processing..';
})
.then((message) => {
    console.log(message);
    return 'Finished..'
})
.then((message)=>{
    console.log(message);
})
// Create a function that returns a Promise. Use .then() and .catch() to handle successful resolution and errors.
  function resolvePromise(success = true){
    return new Promise((resolve, reject) => {
        if(success){
            resolve('Promise resolved successfully!');
        }
        else{
            reject('Something went wrong.');
        }
    });
  }

    resolvePromise(true).then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('error something went wrong', error);
    });

    resolvePromise(false).then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log('error something went wrong', error);
    })

// Use Promise.all() to run two promises in parallel. One should resolve with a number, and the other with a string. Log both results when both promises are resolved.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(42);
    }, 1000); 
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!"); 
    }, 2000); 
});

Promise.all([promise1, promise2])
    .then((results) => {
        console.log("Results:", results);
        console.log("Number:", results[0]);
        console.log("String:", results[1]);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Write a function that simulates fetching data (using setTimeout). Use a Promise to resolve with fake data after 2 seconds.
function fetchData() {
    return new Promise((resolve) => { // Add 'return' to return the Promise
        setTimeout(() => {
            const fakeData = {
                id: 1,
                name: 'Rita Kumari',
                age: 24,
            };
            resolve(fakeData);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log("Data fetched successfully:", data);
    })

    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// Use Promise.race() with two promises. One should resolve quickly, and the other should take longer. Log the result of the first Promise to resolve.
    const quickPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('Quick Promise resolved');
        }, 800);
    });

    const slowPromise = new Promise((reslove) =>{
        setTimeout(() => {
            reslove('Slow Promise resolved');
        }, 2000);
    });

    Promise.race([quickPromise, slowPromise])
    .then((result) => {
        console.log('First promise resolved', result);
    })
    .catch((error) => {
        console.log("Error", error);
        
    });
// Write an asynchronous function that waits for two promises to resolve (using await with Promise.all()) and logs both results.
async function fetchResults() {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve(42); // Resolves with a number
        }, 1000); // Simulates a 1-second delay
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!"); // Resolves with a string
        }, 2000); // Simulates a 2-second delay
    });

    try {
        const results = await Promise.all([promise1, promise2]);
        console.log("Results:", results);
        console.log("Number:", results[0]);
        console.log("String:", results[1]);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchResults();
