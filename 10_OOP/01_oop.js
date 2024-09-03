//object literal

const user = {
    username:"Riddhesh",
    logincount: 7,
    signIn:true,

    getuserDetails : function(){
        //console.log("Got user details");
        console.log(`Username : ${this.username}`); // this : is getting current context
    }
}
console.log(user.username); // Riddhesh
console.log(user.getuserDetails()); // Username : Riddhesh

//-------------------------------------------------
// Constructor function:-

function User(username,loginCount,isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    //return this  // It is implicitely written.
}
// const userOne = User("Ridu",9,true)
// const userTwo = User('Shyam',2,false)
// console.log(userOne); // without using new keyword it will get userTwo values auto and overrites on userOne.

const userOne = new User("Ridu",9,true)
const userTwo = new User('Shyam',2,false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);

/*
 new keyword:
    It creates new empty object creation.
    Calls constructor function auto.
    In it injects this or other functions.
    Calling context as a argument.
 */