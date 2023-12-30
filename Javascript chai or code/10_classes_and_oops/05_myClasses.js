//ES6 ke baad ye sab aaya class new wgera

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("alfaiz","alfaizmalwa567@gmail.com","123")

console.log(chai.encryptPassword());   //123abc
console.log(chai.changeUsername());


// --------------JAVASCRIPT ME--------------

function User1(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User1.Prototype.encryptPassword= function(){
    return `${this.password}abc`
}

User1.Prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User1("tea","gmail.tea","1234567")

console.log(tea.encryptPassword());