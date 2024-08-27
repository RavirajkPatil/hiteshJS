// forEach() not return the values easily from function 
/*
const programing = ["js","MVC","py","CSS"] 

const prog = programing.forEach( (item) => {     // I want to return values from this function
    //console.log(item)
    return item
} )
console.log(prog)       // undefined = because foreach is not gives value return for use of this condition.
*/
//-----------------------------------------------------------
// For return the value from function we use filter()
let num = [1,2,3,4,5,6,7,8,9,10]
/*
// const pr = num.filter( (item) => item>4 ) 
// OR
const pr = num.filter( (item) => {
    //  item > 4                       // []
    return item > 4
} )
console.log(pr);    //  [ 5, 6, 7, 8, 9, 10 ]
*/
/*
const newNum = []
num.forEach( (n) => {
    if (n > 4) {
        newNum.push(n)
    }
})
console.log(newNum);    //  [ 5, 6, 7, 8, 9, 10 ]
*/

//----------------------------------------------------------

let books = [
    { title: 'Shivray', genre: 'History', publish: 2002, edition: 2008},
    { title: 'Biology', genre: 'Science', publish: 1986, edition: 2010},
    { title: 'Earth', genre: 'Geography', publish: 2004, edition: 2018},
];
// let bookUsers = books.filter( (bk) => bk.genre == 'History')

//let bookUsers = books.filter( (bk) => bk.publish >= 2000)

let bookUsers = books.filter( (bk) => { return bk.publish >= 2000 &&  bk.genre == 'History'})
console.log(bookUsers);     // { title: 'Shivray', genre: 'History', publish: 1992, edition: 2008 }
