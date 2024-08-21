//let tinderUser = new Object()   // Singleton object
let tinderUser = {}             // non-Singleton object

tinderUser.email="raviraj@gmial.com",
tinderUser.name="Ravi"
tinderUser.age =30
//console.log(tinderUser);        // { email: 'raviraj@gmial.com', name: 'Ravi', age: 30 }

let regularUser = {
    email : "raviraj@gmial.com",
    useName : {
        FirstName : "Riddhesh"
    }
}
//console.log(regularUser.useName.FirstName);     // Riddhesh

let Obj1 = { 1: "a", 2: "b"}
let Obj2 = { 3: "a", 4: "b"}
//let Obj3 = {...Obj1,...Obj2}    // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//let Obj3 = Object.assign(Obj1,Obj2) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
let Obj3 = Object.assign({}, Obj1, Obj2) // Note: {} - used as a target object  and source Obj1 and Obj2 
                                                //      store into it.

//console.log(Obj3);


//---------------- from database entries -------

let userEntries = [
    {
        name : "Rocky",
        age : 20
    },
    {
        name : "Roxxy",
        age : 20
    },
    {
        name : "Rocky",
        age : 20
    }
]
 //  console.log(userEntries[1].name)
//--------------------------------------------

// console.log(tinderUser);                // { email: 'raviraj@gmial.com', name: 'Ravi', age: 30 }
// console.log(Object.keys(tinderUser));   // [ 'email', 'name', 'age' ]
// console.log(Object.values(tinderUser)); // [ 'raviraj@gmial.com', 'Ravi', 30 ]
// console.log(Object.entries(tinderUser)); // [ [ 'email', 'raviraj@gmial.com' ], [ 'name', 'Ravi' ], [ 'age', 30 ] ]

// console.log(tinderUser.hasOwnProperty("age"));      // true

// -------------------------------
// De-Structre objects : 

let course = { 
    courceName : "Javascript",
    price : 9999,
    name : "Riddhesh"
}

console.log(course.name);   //  if we call everytime name then we have to write course.name but there is option.
                            // output : Riddhesh
let {name : n } = course         // 1. Object of Course. 2. name as 'n' propery of course.
console.log(n);          // output : Riddhesh

//---------------------------------

// API is coming now in JSON format

// example 1 : API in object of json format
/*
{ 
    "courceName" : "Javascript",
    "price" : 9999,
    "name" : "Riddhesh"
}

// example 2 : API in array-object of json format
[
    {},
    {},
    {}
]
*/