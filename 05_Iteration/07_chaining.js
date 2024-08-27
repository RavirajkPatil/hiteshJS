let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = num.map( (n) => n+10)
// console.log(newNums);       // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// ----------------- Chaining ----------------
let newNum = num
                .map( (n) => n * 10 )
                .map( (n) => n + 1 ) 
                .filter( (n) => n >= 40)
console.log(newNum);        // [ 41, 51,  61, 71, 81, 91, 101 ]