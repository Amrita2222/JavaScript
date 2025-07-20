
// Fetch-related Questions:
// Use the fetch() API to get data from an API and log the result in the console.
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json(); 
        console.log("Fetched Data:", data);
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();
// Write a fetch() request to retrieve JSON data from a URL, then parse the JSON and log the result.

// Create a fetch() request that sends JSON data with a POST method to a server and logs the response.

// Write a fetch() request to an API, check the status code, and handle errors if the request fails.

// Use async/await with fetch() to make a GET request to an API and log the response.

// Use fetch() to send a POST request with a JSON object as the body, then log the response to the console.

// Write a function that uses fetch() to fetch user data from an API and logs the user name to the console.

// Write a fetch() request that retrieves data from a URL and catches any errors using .catch() if the network fails.

// Use fetch() to make a GET request and log an error message if the status code is not 200 (successful).

// Create a fetch() call with custom headers (e.g., authorization headers) and log the response.

