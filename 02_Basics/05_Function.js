function myFunc(){
    console.log("R");
    console.log("A");
    console.log("V");
    console.log("I");
}
//myFunc()
//--------------------
function addition(number1,number2) {
    // var result = number1+ number2
    // return result;
    return number1 + number2
}
// let result = addition(3,1)
// console.log("Result: ",result);      // Result:  4

//console.log(addition(3,1))    // 4
//--------------------------

function userLogedIn(name) {
    return `${name} is logged in.`
}
//console.log(userLogedIn("Riddhesh"));   // Riddhesh is logged in.
//console.log(userLogedIn());             // undefined is logged in. = when function value is not given 
                                        // then it gives undefined.
//--------------------
function userLogedIn(name) {        // we can give default values also like, name = "Ridu"
    if (!name) {       // optional we can use if(name === undefined)
        console.log("Please enter the user name");
        return
    }
    return `${name} is logged in.`   
}
//console.log(userLogedIn());  
//----------------------------------

//function calculateCart(...num1) {       // ...num1 = rest oprator.
function calculateCart(val1,val2,...num1) {  // [ 8, 4, 10 ]
    return num1
}
//console.log(calculateCart(2,5,8,4,10)); // [ 2, 5, 8, 4, 10 ]

//-----------------------------

let userObject = {
    userName:"Riddhesh",
    price:200
}

function mappingObject(anyobject) {
    console.log(`${anyobject.userName} is user and price is ${anyobject.price}`);
}
//mappingObject(userObject)       // Riddhesh is user and price is 200 = passing object instance
// OR
mappingObject({     // passing object directly.
    userName:"Raviraj",
    price:100
}) 
//------------------

let myArray = [100,200,300,400]
function arrayFunction(anyArray) {
    return anyArray[2]
}
console.log(arrayFunction(myArray));    // 300 = calling array object

console.log(arrayFunction([10,20,30,40]));    // 30 = directly pass array 
