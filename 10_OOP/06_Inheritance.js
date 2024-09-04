class User {
    constructor(username) {
        this.username = username
    }
    logMe(){
        console.log(`UserName is : ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username) // Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Teacher
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
let Lect = new Teacher("Rocky","rocky@gmail.com","Abc123")
//console.log(Lect);  // Teacher { username: 'Rocky', email: 'rocky@gmail.com',  password: 'Abc123' }
//Lect.addCourse()        // A new course was added by Rocky

const masalaChai = new User("MasalaChai")
//masalaChai.logMe()  // UserName is : MasalaChai
Lect.logMe()        // UserName is : Rocky

console.log(Lect instanceof User);