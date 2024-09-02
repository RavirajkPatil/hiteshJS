/*
const promiseOne = new Promise(function (resolve, reject) {
//  Do an async task
// DB calls, cryptography, network

setTimeout(() => {
    console.log("Async task is completed");
    resolve()   // witout resolve only get output: Async task is completed.
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

//---------
// Without creation variable
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async 2 task");
        resolve()
    }, 1000);
 }).then(function() {
    console.log("Async 2 resolved");
    
 })
*/
 //----------------
/*
 const promiseThree = new Promise(function(resolve,reject) {
    setTimeout(function(){
        resolve({username: "Raviraj", mail:"ex@test.com"})
    }, 1000)
 })

 promiseThree.then(function(user){
    console.log(user);
 })

 // output: { username: 'Raviraj', mail: 'ex@test.com' }
 */
//-------------------------------------
/*
let promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function() {
        let result =false
        if (!result) {
            resolve({username:"Raviraj",password:"123456"})
        }
        else{
            reject('Error: somthing went wrong')
        }
    }, 1000);
})

promiseFour.then((user)=>{
    console.log(user);      //{ username: 'Raviraj', password: '123456' }
    return user.username    // Promise { <pending> }
}).then((username)=>{       // another and catch is called chaining
    console.log(username);  // Raviraj
}).catch(function (error){
    console.log(error);     // Error: somthing went wrong
}).finally( ()=> console.log("Promise is eighter resolve or not "))
*/
// -------------------------
/*
let promiseFive = new Promise(function (resolve,reject) {
    setTimeout(function() {
        let result =true // Error: JS went wrong
        //let result =false   // { username: 'Javascript', password: 'password' }
        if (!result) {
            resolve({username:"Javascript",password:"password"})
        }
        else{
            reject('Error: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    try{
        const responce = await promiseFive
        console.log(responce);
    } catch(error){
        console.log(error);
    }
    
}
consumePromiseFive()
*/
//-----------------------------------
/*
async function getAllUsers(){
   try {
    fetch()
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await responce.json()
    console.log(data);
   } catch (error) {
    console.log('E: ', error);
   }
}
getAllUsers()
*/
const fetch = require("node-fetch");
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))