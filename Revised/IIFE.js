// Immediately Invoked Function Expression (IIFE)

(function chai() {
    console.log(`DB CONNECTED`)
})();

// ()()  global scope ke pollution ko remeove krne ke liye used hota hai
( function chaiaur(){
    console.log(`DB CONNECTED Two`);
})();
