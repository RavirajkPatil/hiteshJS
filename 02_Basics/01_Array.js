//  Array ---
let myArray = [2,3,8,5,4]
// console.log(myArray)
// console.log(myArray[2])

let myHeros = ["Hulk","Iron-Man","Thor"]
//console.log(myHeros);

let myArray1 = new Array(2,3,8,5,4)
//console.log(myArray1);

//-----  Array methods ------

let myArr = [2,3,8,5,4]
//console.log(myArr);

// myArr.push(7)        // [ 2, 3, 8, 5, 4, 7 ]

// myArr.pop()          // [ 2, 3, 8, 5 ]

// myArr.unshift(9)     // [ 9, 2, 3, 8, 5, 4 ]

// myArr.shift()           // [ 3, 8, 5, 4 ]
// console.log(myArr);

// console.log(myArr.includes(5));     // true - bool
// console.log(myArr.indexOf(8));      // 2 - gives 2nd position in array

let newArr = myArr.join()   //  2,3,8,5,4   - in string type of format
//console.log(newArr)

//---- slice & splice -------
let myArr1 = [2,3,8,5,4]
console.log("Main ",myArr1);    //  Main  [ 2, 3, 8, 5, 4 ]

let arrSlice = myArr1.slice(1,3)    // Slice don't change the main Array values
console.log("Slice ",arrSlice);     // Slice  [ 3, 8 ]
console.log("Main-slice ",myArr1);

let arrSplice = myArr1.splice(1,3)  //  Splice change the main Array values
console.log("Splice ",arrSplice);   // Splice  [ 3, 8, 5 ]
console.log("Main-splice ",myArr1);        // Main  [ 2, 4 ] - it shows remianing array values.
