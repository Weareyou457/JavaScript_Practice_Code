function SetuserName(username) {
    console.log("called");
    this.username = username
}

function createUser(username, email, password) {
    // SetuserName(username) //upr wale function me value set kar rha hai (refernce diya hai no call)

    SetuserName.call(this, username)
    //   khud ke this me mat karo me apna this deta hu 

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail", "123");
console.log(chai);


