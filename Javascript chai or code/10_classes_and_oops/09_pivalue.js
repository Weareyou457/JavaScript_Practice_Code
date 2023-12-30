// pi ki value change karna hai to

const descripter = Object.getOwnPropertyDescriptor(Math,"PI");

// console.log(Math.PI);  //value change karna hai to 
// Math.PI = 5 
// console.log(Math.PI);  //no change 


// console.log(descripter);





const Chai = {
    name:'ginger chai',
    price:250,
    isAvaliable : true
}

console.log(Chai);


console.log(Object.getOwnPropertyDescriptor(Chai,"name"));  //config define kar skte hai 




Object.defineProperty(Chai,'name',{
    writable : false,
    enumerable : true // fslse me name pr loop nhi la gega
})

console.log(Object.getOwnPropertyDescriptor(Chai,"name")); 





for (const [key,value] of Object.entries(Chai)) {
    console.log(`${key} : ${value}`);
}

