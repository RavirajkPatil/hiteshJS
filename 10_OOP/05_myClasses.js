// ES6
/*
class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}123`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
let chai = new User('Raviraj','raviraj@gmail.com','abc')
//console.log(chai);    
console.log(chai.encryptPassword());    // abc123
console.log(chai.changeUsername());     // RAVIRAJ
*/

// Behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}123`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
let Tea = new User('Raviraj','raviraj@gmail.com','abc')
console.log(Tea.encryptPassword());
console.log(Tea.changeUsername()); 