const score =100
const num = new Number(score)

//console.log(num);
//console.log(num.toString().length);
//console.log(num.toFixed(2));        // to keep decimal values

let num1 = 123.898
//console.log(num1.toPrecision(1));

let balance = 10000000
//console.log(balance.toLocaleString());
//console.log(balance.toLocaleString('en-IN'));

//------------------Math----------------------

// console.log(Math);
// console.log(Math.abs(-5));  //convert - to + value
// console.log(Math.round(5.6));
// console.log(Math.ceil(8.1));
// console.log(Math.floor(8.1));
// console.log(Math.min(8,2,7,9));
// console.log(Math.max(8,2,7,9));

/*
console.log(Math.random());
console.log(Math.random()*10 +1);
console.log((Math.random()*10) +1);
console.log(Math.floor(Math.random()*10) +1);
*/
const min=10
const max=20
//Math.random(max - min)+1
//Math.random(max - min)+1 +min
//Math.random()*(max - min)+1 +min
console.log(Math.floor(Math.random()*( max - min + 1)) + min);
