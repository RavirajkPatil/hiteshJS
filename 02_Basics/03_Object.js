// singleton
//Object.create()

// Object literals

let mySym = Symbol("MySym1")

let jsUser = {
    name : "Raviraj",
    [mySym] : "jsSymbol",
    "email": "ravi@google.com",
    age:30
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);

jsUser.email = "riddhesh@hotmail.com"
//Object.freeze(jsUser)
jsUser.email = "riddhesh@gmail.com"

//console.log(jsUser);

jsUser.jsGretings = function() {
    console.log("Hello js");
}
jsUser.jsGretingsTwo = function() {
    console.log(`Hello js user ,${jsUser.name}`);
}
//console.log(jsUser.jsGretings);     // [Function (anonymous)]
console.log(jsUser.jsGretings());   //Hello js
console.log(jsUser.jsGretingsTwo());    // Hello js user ,Raviraj
