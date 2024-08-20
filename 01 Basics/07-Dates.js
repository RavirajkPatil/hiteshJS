//  Ctrl + spacebar = for know the intelisence

// Date
/*
let myDate = new Date()     // type of Date is object.
console.log(myDate);        //  2024-08-20T06:31:26.838Z

console.log(myDate.toString());     //  Tue Aug 20 2024 12:01:26 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //  Tue Aug 20 2024

console.log(myDate.toLocaleString());   // 20/8/2024, 12:01:26 pm
console.log(myDate.toLocaleDateString());   // 20/8/2024
*/

//let myCreatedDate = new Date(2023,0,21)     // In js month start from 0.
//console.log(myCreatedDate.toDateString());    // Sat Jan 21 2023
//let myCreatedDate = new Date(2023,0,21,5,5)   // 21/1/2023, 5:05:00 am
let myCreatedDate = new Date("08-20-2024")
// console.log(myCreatedDate.toLocaleString());    
// console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);     // value get in milisecond- use for comparison

console.log(Date.now()/1000);   // 1724136336.987   value get in seconds
console.log(Math.floor(Date.now()/1000)); // 1724136487    for exact seconds


let myDate = new Date()
console.log(myDate)         //  2024-08-20T06:56:15.286Z
console.log(myDate.getDay())    //  2   =  means Tuesday
console.log(myDate.getMonth()+1)    // month start from 0 thats why I add +1    output: 8

myDate.toLocaleString('default',{       //  If you want to customize date values
    weekday: "long",
    hour:"2-digit"
    })

console.log(myDate.toLocaleString('default',{
    weekday: "long",
    hour:"2-digit"
    }));
