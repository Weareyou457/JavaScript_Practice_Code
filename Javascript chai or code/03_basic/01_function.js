// console.log("H");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");


function sayMyName(){
    console.log("H");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
}

// sayMyName //refrence rhta hai vha function

sayMyName()  //exectution or call


function addTwoNo(number1,number2){  //perameters
    console.log( number1+number2 );
}

addTwoNo() //NAN

addTwoNo(3,4) 
// addTwoNo(3,"4");  //arguments
// addTwoNo(3,"a"); //3a

const result = addTwoNo(3,5);

console.log("result",result); //undefined copy nhi bana

function addTwoNo2(number1,number2){
    let results = number1+number2;
    return results;
}

const result1 = addTwoNo2(4,5);
console.log("result",result1);







//depth me chrcha hogi ab 

// or kitne tarike se value le skte hai 

// function loginUserMessage(username){
//     if(username === undefined){         ///2
//         return `plz enter user name`
//     }
//     return `${username} just logged In`    ///1
// }

// loginUserMessage("alfaiz");

console.log(loginUserMessage("alfaiz"));
console.log(loginUserMessage()); //undefined agar value pass nhi huvi to







 //                   ||





function loginUserMessage(username = "sam"){  //kuch nhi diya to sam ayega
    if(!username){         ///2
        return `plz enter user name`
    }
    return `${username} just logged In`    ///1
}


// loginUserMessage("alfaiz");

console.log(loginUserMessage("alfaiz"));
console.log(loginUserMessage()); //undefined agar value pass nhi huvi to





