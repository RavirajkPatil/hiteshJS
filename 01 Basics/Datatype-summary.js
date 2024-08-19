// Regarding Notes
/*
    Primitive:
    7 types = String, Number, Boolean, null, undefined, Symbol, BigInt.
*/
    const count= 100    // number
    const countValue = 100.3    // number
    const isLogged = false  // boolean
    let amount  //undefined

    const id = Symbol('123')    //symbol
    const anotherId = Symbol('123')     //symbol
    //console.log(id == anotherId)

    const bigNumber = 456415485456468854654823876n      //bigint
    //console.log(bigNumber)

    //console.log(typeof id)

/*
    Non-Premitive:(Reference)
        Array, Object, Functions.
*/

    const heros = ["Ravi","Ridu","Shambhu"]     //object

    let myObj = {       //object
        name: "hitesh",
        age: 23
    }

    const myFunction = function() {     //function
        console.log("Hello world")
    }

    //console.log(typeof myFunction)

    //=======================================================
    
    //Stack : Store Primitive datatypes.
    //  We get copy of values.
    let FirstName = "Raviraj"
    let NickName = FirstName
    NickName = "Pruthviraj"

    console.log(FirstName);
    console.log(NickName)
    
    //Heap : Store non-premitive datatypes.
    //  We get reference values.
    let UserOne = {
        email: 'raviraj@gmai.com',
        upi:'ravi@ybl'
    }
    //console.log(UserOne.email)
    let UserTwo = UserOne
    UserTwo.email = "pruth@gmail.com"
    
    console.log(UserOne.email)
    console.log(UserTwo.email)