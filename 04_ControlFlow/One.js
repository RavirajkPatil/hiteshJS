// If...Else :

// const power = 200
// if (power >100) {
//     let score = 10      // if we declare var then it is executed 
//     console.log(`Power is greater than 100 & score is ${score}`);
// }
//console.log(`Execution ${score}`);   // not executed because of scope of score value

//------------------------
/*
let a = 10
if(a <=20)
{
    console.log(`a is less than 20`);
}
else{
    console.log(`a is greater than 20`);
}
    */
//--------------------------------
// Nested if else:
/*
let balance = 1000
if (balance<500) {
    console.log(`balance is less than 500`);
}else if (balance<750) {
    console.log(`balance is less than 750`);
} else {
    console.log(`balance is less than 1100`);
}
    */
//-------------------------------------
const userLoggedIn = false
const debitCard = true
const googleLoggedIn = true

if(userLoggedIn && debitCard){
    console.log(`Allow to buy`);
}

if(userLoggedIn || googleLoggedIn){
    console.log(`Not allow to buy`);
}