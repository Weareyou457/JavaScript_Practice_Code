// **********************************

//stack memory(Primitive) , heap memory (non-primitive)

let myYoutubeChannel = "alfaizRangrez";

let anotherName = myYoutubeChannel; //Copy de diya in hone 

anotherName = "chai or code"
console.log(myYoutubeChannel);
console.log(anotherName);

//alfaizRangrez
// chai or code

let userOne = {
    email:"alfaizmalwa",
    upi : "user@rybl"
}

let userTwo = userOne //refernce milta hai change original milta hai 

userTwo.email = "hello@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// hello@gmail.com
// hello@gmail.com