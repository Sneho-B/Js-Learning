//immediately invoked fucntion expression

(function name(){
    console.log("Snehoritro");
})();
// first () is used to make the function expression and the second () is used to call the function
//used to remove global scope pollution
//; is needed to end this statement

( (name)=>{
    console.log(`Welcome ${name}`);
})("Bose");

