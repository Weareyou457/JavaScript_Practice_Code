// unlimited argument

// rest operator 

// kula item hai bundle me pack karo or mujhe dedo  [array de dega ye]


function calculateCartPrice(...num1){
    return num1
}


console.log(calculateCartPrice(7,7,7));  //jyda value hai 


function calculateCartPrice1(val1,val2,...num1){
    return num1
}


console.log(calculateCartPrice1(200,300,400,500));  //400 or 500 lega 


//object passing

const user ={
    username:"hitesh",
    price:199
}

function handleObject(anyobject)   {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)

handleObject({
    username:"sam",
    price:399
})

//array passing

const mynewarray =[200,300,400,500,700];

function returunSecondValue(getArray) {
    return getArray[1]
}

// console.log(returunSecondValue(mynewarray));

console.log(returunSecondValue([1,2,3,4])); //2

