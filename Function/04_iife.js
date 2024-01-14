
// Immediately Invoked Function Expressions (IIFE)


(function chai() {
            // name IIFE
            console.log(`DB CONNECTED`)
}) ();

((name) => {
            console.log(`DB Connected Two ${name}`)
})('Rita')