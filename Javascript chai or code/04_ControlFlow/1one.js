// pura code exceution nhi hona chiye  control hona chiye 

// if(condition -> true ce || false -> no ce){code}

const loggedIn = true 

if(2 !=="2" //2===3
){
    // console.log("true 3");
}

if(2=="2"){
    // console.log("true 2");
}

// >,<,<=,>=,==,!= Relational Operator 
// two equal check kar rahe hai to

// ===,!== type or value both

let temp=41

if(temp===40){
// console.log("1");
}
else {
    // console.log("2");
}



const score = 200

if(score>100){
    let power ="fly"
    console.log(`${power} kya hai`);
}

// console.log(`${power} kya hai`);  error let me var me nhi ayegi



const userloggedIn=true;
const debitCard = true;
const loggedinFromGoggle = false;

if(userloggedIn && debitCard){
    console.log("buy Course");
}

if(userloggedIn || loggedinFromGoggle){
    console.log(userloggedIn);
}


