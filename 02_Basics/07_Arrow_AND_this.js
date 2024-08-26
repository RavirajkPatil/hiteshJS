// this = It is use of current context.
// In browser window is a global object.
// It is working under object only not in function (ref line 20-33)

 let user={
    username :"Ridu",
    age : 2,
    welcome : function() {
        //console.log(`${username}, is logged in.`);  // username is not defined
        //console.log(`${this.username}, is logged in.`); // Ridu, is logged in.
        //console.log(this);  // { username: 'Ridu', age: 2, welcome: [Function: welcome] } = It gives you whole object.
    }
 }
 user.welcome()
 user.username = "Shyam"
 user.welcome() // Shyam, is logged in.
 //console.log(this); // {} = It gives you empty object, because on global there is no any method available.
 
//---------------------------------
function home() {
    let name="Anu"
    //console.log(this.name); // undefined = because not valid to declare variable in function.
   // console.log(this);
}
home()

//or 

var home = function() {
    let name="Anu"
   //console.log(this.name); // undefined = same result as above.
}
home()

//----------------------------------- Arrow function ----------------------------
const add = (num1,num2) =>{     //  proper Arrow function= also called Explicite return
    return num1 + num2
}

// const add1 = (num1,num2) => num1 + num2  //  proper Implicite return= not to use curly braces.
//const add1 = (num1,num2) => (num1 + num2)
const add1 = (num1,num2) => ({username : "Raviraj"}) // calling object with curly braces.

console.log(add(3,4))   // 7
//console.log(add1(3,4))  // 7
console.log(add1())     // { username: 'Raviraj' }