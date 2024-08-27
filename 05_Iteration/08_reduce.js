let myNums = [1, 2, 3]
// acc : accumulator ; currval : currentValue
// if we not declare acc value it will assume 0th index value is acc value
const myTotal = myNums.reduce( (acc, currval) =>{
    //console.log(`acc : ${acc} & cuurval : ${currval}`)
    return acc + currval
},0)                  // here is the provide accumulator value.

const myTotal1 = myNums.reduce( (acc, curval) => acc+curval, 2)

//console.log(myTotal); 
// Output: 
        // acc : 0 & cuurval : 1
        // acc : 1 & cuurval : 2
        // acc : 3 & cuurval : 3
        // 6

//console.log(myTotal1);  // 8
//--------------------------------------------

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "mvc course",
        price : 5999
    },
    {
        itemName : "jQuery course",
        price : 6999
    }
]
const priceTotal = shoppingCart.reduce( (acc, item) => acc+item.price,0)

console.log(`Total price is : ${priceTotal}`);  // Total price is : 15997
