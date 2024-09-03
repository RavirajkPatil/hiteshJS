/* challenge
let chaiName = "matka   "
let channelName = "rockerzzz     "

console.log(chaiName.trueLength());
*/
/*
let myHeroes = ["Thor","SpiderMan"]
let heroPower = {
    Thor:"Hammer",
    SpiderMan:"Sling",

    getSpiderPower: function () {
        console.log(`Spidy is power of ${this.SpiderMan}`);
    }
}

Object.prototype.Riddhesh = function () {   // It is declare as a object creation in any mehtod we can access.
    console.log(`Riddhesh object is calling`);
}
//heroPower.Riddhesh()  // Riddhesh object is calling = It is accessible to all properties.
//myHeroes.Riddhesh() // Riddhesh object is calling   = It is accessible to Array also

Array.prototype.heyRiddhesh = function () {
    console.log(`Hitesh says Hello`);
}
//myHeroes.heyRiddhesh()  // Hitesh says Hello
heroPower.heyRiddhesh()     // it gives compile time error

// object catching to all types but array not catching to object
*/
// Inheritance  ------------
const user ={
     name:"Chai",
     email: "chai@gmail.com"    
}

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fulltime: true,
    __promo__: TeachingSupport   // Inheritance
}
Teacher.__promo__ = user // prototypical inheritance- older approach
 
//Modern Syntax:
Object.setPrototypeOf(TeachingSupport,Teacher)

//----------------------------------------------

let anotherName = "ChaiAurCode    "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    console.log(`True lenght is : ${this.trim().length}`);  
}
anotherName.trueLength()    // ChaiAurCode & True lenght is : 11
"Riddhesh".trueLength()     // Riddhesh & True lenght is : 8