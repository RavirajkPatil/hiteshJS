let marvel_hero = ["IronMan","SpiderMan","Hulk"]
let dc_hero = ["Batman","flash","Loki"]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero);       // [ 'IronMan', 'SpiderMan', 'Hulk', [ 'Batman', 'flash', 'Loki' ] ]

// let heroes = marvel_hero.concat(dc_hero)    //[ 'IronMan', 'SpiderMan', 'Hulk', 'Batman', 'flash', 'Loki' ]
// console.log(heroes);   

let all_hero = [...marvel_hero,...dc_hero]  // [ 'IronMan', 'SpiderMan', 'Hulk', 'Batman', 'flash', 'Loki' ]
//console.log(all_hero);

let arrayNum = [1,3,2,[4,5],6,7,[8,9,10],4]
let real_Array = arrayNum.flat(Infinity)    // we can define number also flat(4) how depth to resolve array
//console.log(real_Array);
/* output: 
    [
        1, 3, 2, 4,  5,
        6, 7, 8, 9, 10,
        4
    ]
*/

console.log(Array.isArray("Raviraj"))       // false
console.log(Array.from("Raviraj"))     // ['R', 'a', 'v', 'i', 'r', 'a', 'j']

console.log(Array.from({name:"Raviraj"})) // [] = because key value pairs array not found

let a= 100
let b =200
let c =300
console.log(Array.of(a,b,c));    //[ 100, 200, 300 ] =  Returns a new array from a set of elements.
