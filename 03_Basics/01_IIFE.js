// Immediately Invoked Function Expression - IIFE
// IIFE - use for remove the global declarations.
// ()()- 1st delcared as a function definition, 2nd is the execution.


function chai() {       //  Normal execution of function
    console.log('DB Connected');
}
chai();  // DB Connected
        // We use ; for ending first function.

( function chai() {       // Named IIFE
    console.log('DB Connected named IIFE');
} )();
        

(function() {       //  IIFE execution
    console.log('DB Connected IIFE');
})();    // DB Connected

( ()=>{
    console.log('DB for Arrow');
})();

( (name)=>{
    console.log(`DB for Arrow of ${name}`);
})("Riddhesh")
