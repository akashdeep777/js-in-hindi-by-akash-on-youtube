// for imidiately invoked function expressions  (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);    // name iife
})();

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   //whitout name iife
})("akash")

// this thing use when we have to save the variables from scope issue 