function User(email,password) {
        this.email = email,
        this.password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this.email = email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this.password = password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    })
    
}
const chai = new User("raviraj@google.com",'abc')
console.log(chai.email)