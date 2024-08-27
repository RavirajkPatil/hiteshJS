// 2] for in : It is working for object and others also

let myObject = {
    js : "JavaScript",
    css : "Casceding Style Sheet",
    jq : "JQuery",
    rb : "Rubby"
}
for (const key in myObject) {
    //console.log(`${key} is the short of ${myObject[key]}`);
}
// Output: 
        // js is the short of JavaScript
        // css is the short of Casceding Style Sheet
        // jq is the short of JQuery
        // rb is the short of Rubby

// -------------------------------
const programing = ["js","MVC","py","CSS"]  

for (const key in programing) {
    //console.log(programing[key]);   // js    MVC    py    CSS
   // console.log(key);   // 0    1   2   3 
}
// In array has default key i.e. start from 0. In Object we gives key manually.

//------------------------------

const map = new Map()   // map is not iterable that's why we don't use forIn in map
map.set('IN', 'India')
map.set('FR', 'France')
map.set('BR', 'Brazil')
map.set('IN', 'India')

for (const key in map) {
    console.log(map[key]);
}