class User {
    constructor(email,password) {
        this.email = email;
        this.password =password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    // get password(){
    //     return this._password.toUpperCase()
    // }

    get password(){
        return `${this._password}rocky`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}
const userData = new User('rocky@goggle.com',"abc")
console.log(userData.password); // Maximum call stack size exceeded
console.log(userData.email);
