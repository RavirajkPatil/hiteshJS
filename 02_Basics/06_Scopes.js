let a = 100
const b = 200
var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("Inner : ",a); // 10 - it called first local then global
    
}

// console.log(a); // 100
// console.log(b); // 200
// console.log(c); // 30  - var is assumed as a global declaration that's why not to use var in js.

//----------------------------------
// Nested Scope : 

function One() {
    const name = "Ridu"

    function Two() {
        const email = "ridu@google.com"
        
       // console.log(name);
    }
    // console.log(email);
    Two()
}
One()

//---------------------
if (true) {
    const userName = "Riddhesh"
    if (userName === "Riddhesh") {
        let website = 'rid.com'
        //console.log(`Name is ${userName} and website is ${website}`);
    } 
    //console.log(website);
}
//console.log(userName);

//---------------------
console.log(addOne(5));     // 6
function addOne(num) {
    return num + 1
}
//console.log(addOne(5));   // 6

//console.log(addTwo(6)); // Cannot access 'addTwo' before initialization - hoisting not working for variable declaration
let addTwo = function (num) {
    return num + 2
}
console.log(addTwo(6));     // 8