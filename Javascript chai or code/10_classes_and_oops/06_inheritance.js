class User {
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class teacher extends User {
    //override

    constructor(username,email,password){
        super(username)  //top 1 wali 
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const chai = new teacher("chai","chai@gmail","1234")
chai.addCourse()
console.log(chai);

const maslachai = new User("maslachai")
maslachai.logMe()
console.log(maslachai);

console.log(chai instanceof teacher);  //true



//OUTPUT

// teacher { username: 'chai', email: 'chai@gmail', password: '1234' }