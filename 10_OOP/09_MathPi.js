/*
console.log(Math.PI);   // 3.141592653589793
Math.PI = 5;
console.log(Math.PI);   // It is not changable because it is constant.
*/

let disc = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(disc);
// Output: 
    // {
    //     value: 3.141592653589793,
    //     writable: false,
    //     enumerable: false,
    //     configurable: false
    // }

//-----------------------------
/*
const chai = {
    name:"Lipton Tea",
    price:250,
    isAvaialable: true
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
//Output:
    // {
    //     value: 'Lipton Tea',
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    // }

Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// Output:
    // {
    //     value: 'Lipton Tea',
    //     writable: false,
    //     enumerable: false,
    //     configurable: true
    // }

for(let [key,value] of Object.entries(chai)){
    console.log(`${key} : ${value}`);
}

// output: 
    // price : 250
    // isAvaialable : true
*/
//--------------------------------------
const Rider = {
    name:"Hotson",
    price:250,
    isAvaialable: true,
    orderChai: function() {
        console.log("Chai not available");
    }
}

Object.defineProperty(Rider,'name',{
    enumerable: false   //  because of this name key is not printable in object entry
})

for(let [key,value] of Object.entries(Rider)){
    if (typeof value !== 'function') {  // to exclude function
        console.log(`${key} : ${value}`);   
    }
}


