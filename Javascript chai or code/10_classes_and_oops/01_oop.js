// object literal
// lietrally ek object bnana

const user = {
    username : "alfaiz",
    loginCount : 8,
    signedIn :false,

    getUserDetail : function (){
        console.log("Got User Deatil");
        console.log(`${this.username}`);
        console.log(this);

    }
}



console.log(user.username);
console.log(user.getUserDetail());

// cuurent chizo ki baaat kar rha hu to context btana paddega na to 
//  this //console.log(`${this.username}`);

console.log(this);  //{} change hoti rhti hai or browser me Window Object milta hai 





/////////////////CONSTRUCTOR//////////////

//  const promiseOne = new Promise ()   //new keyword hi constructor function hai bar bar bna ske new context bna ske (new copy) 


function user1(username,loginCount,isLoggedIn) {
    //(variable hai) username = username
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this 
}

// const userOne = user1("hitesh",1,true)
// const userTwo = user1("hitesh",2,true)   //value orveride 

const userOne = new user1("hitesh",1,true)
const userTwo = new user1("hitesh",2,true)

console.log(userOne);

// new -> 1. empty object create hota hai 
// 2. constructor function call hota new    keyword ke through
// 3. object inject hote 
// 4.miljate hai 

console.log(userOne.constructor);  // return krti hai ek function 