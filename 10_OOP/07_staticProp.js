class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){      // Ridu.createId is not a function = becasue we made this function as a static
        return `123`
    }
}
const Ridu = new User("Riddhesh")
//console.log(Ridu.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email=email
    }
}
const Ravi = new Teacher("raviraj","raviraj@google.com")
//Ravi.logMe()    // Username: raviraj
console.log(Ravi.createId());

