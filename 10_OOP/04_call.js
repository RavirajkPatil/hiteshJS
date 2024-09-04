/*
function getUser(username) {
    //complex DB calls
    this.username = username;
    console.log("Called");
    
}

function setUser(username, email, password) {
    getUser(username)
    this.email = email
    this.password = password
}
const Tea = new setUser("Riddhesh","ridu@gmail.com","123456")
console.log(Tea);
// Output: - 
// Called
// setUser { email: 'ridu@gmail.com', password: '123456' }
*/

function getUser(username) {
    //complex DB calls
    this.username = username;
    console.log("Called"); 
}

function setUser(username, email, password) {
    getUser.call(this,username)
    this.email = email
    this.password = password
}
const Tea = new setUser("Riddhesh","ridu@gmail.com","123456")
console.log(Tea);
//Output:
// Called
// setUser { username: 'Riddhesh', email: 'ridu@gmail.com',  password: '123456' }

//call() pass current execution context to the another function