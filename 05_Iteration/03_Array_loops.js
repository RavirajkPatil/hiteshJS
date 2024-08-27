// 1] for of : 
// syntax : [{},{},{}]
//            ["","",""]

let myArray = [1,2,3,4,5,6]
for (const arr of myArray) {
    //console.log(arr);
}
//----------------------
let greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " ")
        break
    //console.log(`char is ${greet}`)
}
//------------------------
// Maps: it is a object holds key-value pair
//       It gives unique value (avoid duplicate)
const map = new Map()
map.set('IN', 'India')
map.set('FR', 'France')
map.set('BR', 'Brazil')
map.set('IN', 'India')
//console.log(map);       // Map(3) { 'IN' => 'India', 'FR' => 'France', 'BR' => 'Brazil' }

for (const [key,value] of map) {
    //console.log(key,':- ',value);
}
// output: 
        // IN :-  India
        // FR :-  France
        // BR :-  Brazil

//-----------------------
let myObject = {        // for of not working for object
    'game1':'BGMI',     // game1:'BGMI',
    'game2':'spiderman' // game2:'spiderman'
}
for (const [key,value] of myObject) {
    //console.log(key,':- ',value);
}