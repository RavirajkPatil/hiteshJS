//const email = "rav@gmail.com"   // Got user email
//const email = ""   // Not get email
const email = []
if(email){
    //console.log("Got user email");
} else{
    console.log("Not get email");
}

/*
falsy values: false, 0, -0, BigInt 0n, "", null, undefined,

truthy values: "0",'false'," ",[],{},function(){} - any values in string is truethy.
*/

// To check array is empty or not
if (email.length === 0) {
   // console.log("Array is empty");
}

// To check object is empty or not.
let emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
   // console.log("Object is Empty");
}

//---------------------------------------------------------------------------

// Nullish coalescing operator (??) : use for null & defined

 let val1;
 //val1 = 5 ?? 10         // 5
 //val1 = null ?? 10         // 10
 //val1 = undefined ?? 20      // 20
 val1 = null ?? 10 ?? 20    // 10
 console.log(val1);
 
 //-------------------------------------
 // Turnary operator: minified version of if..else..
 // condition ? true : false

 const bal = 50
 bal >= 80 ? console.log("Less than 80") : console.log("Greater than 80")
 
