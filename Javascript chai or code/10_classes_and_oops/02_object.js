function multiplay(num) {
    this.num = num;  //refernce lena padta hai use karne ke liye 
    return num*5
}


multiplay.power = 2

console.log(multiplay(5));     //25
console.log(multiplay.power);  //har ek chiz object hai (2)
console.log(multiplay.prototype);   //{}




// ----------------THIS IN DETAIL -------------------------

function createUser(username,score) {
    this.username = username  //currnt context
    this.score=score
}

createUser.prototype.increment = function(){
   this.score++   //kiska store bdyega
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
 }

const chai = new createUser("chai",25)
const tea =  createUser ("tea",250)     //kisne bulaya hai 

chai.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/