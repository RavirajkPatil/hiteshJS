// For-loop:
// for(initialization ; condition; increamentation)
// for (let i = 0; i <= 10; i++) {         // for change multiple lines: press Ctrl+D
//     const element = i;
//     console.log(element);
// }
/*
for (let i = 0; i <= 10; i++) {         // for change multiple lines: press Ctrl+D
    const element = i;
    if (i == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}
*/
//-------------------- Nested for loop
/*
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner lop value : ${j} and inner loop value : ${i}`); 
        console.log(i+" * "+j+" = "+i*j)    // multiplication tables
    }
}
    */

//--------------------- for loop with Array ------------------
/*
let myArray = ["Shaktiman","Batman","Spiderman"]
console.log(myArray.length);                        // 3
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);               // Shaktiman Batman Spiderman
}
*/

//--------------------- break and continue ------------
/*
for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log("5 is detected")
        break                       // It will break condition at that time and take a exit from this condition
    }
    console.log(`Value of i : ${index}`);
}
// Output is : 
  /*      Value of i : 0
        Value of i : 1
        Value of i : 2
        Value of i : 3
        Value of i : 4
        5 is detected */

for (let index = 0; index <= 10; index++) {
    if (index == 5) {
        console.log("5 is detected")
        continue                        // It wil skip execution after it and return to the condition again.
    }
    console.log(`Value of i : ${index}`);
}
// Output:
/*      Value of i : 0
        Value of i : 1
        Value of i : 2
        Value of i : 3
        Value of i : 4
        5 is detected
        Value of i : 6
        Value of i : 7
        Value of i : 8
        Value of i : 9
        Value of i : 10 */