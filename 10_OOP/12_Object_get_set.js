const User = {
    _email:"rocky@fb.com",
    _password:"abcd",

    get email(){
        return this._email
    },
    set email(value){
        this._email = value
    }
}

const Tea = Object.create(User)
console.log(Tea.email);
