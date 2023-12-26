//NON SINGLETON OBJECT
// const tinderUser = new Object() constructor 


const tinderUser = {} //SINGLTON OBJECT 

tinderUser.id = "123abc"
tinderUser.name = "summy"
tinderUser.isloggedIn = false 

// console.log(tinderUser);

 const regularUser = {
    email:"somes@gmail.com",
    fullName:{
        firstName:"hitesh",
        lastName :"Chodhry",
    }
 }

//  ? optional chaining

//  console.log(regularUser);

//  console.log(regularUser.fullName);

//  console.log(regularUser.fullName.firstName);



const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj5={5:"c",4:"d"};
const obj6={7:"c",6:"d"};
const obj7={9:"c",0:"d"};

// const obj3 = {obj1,obj2};

// console.log(obj3);
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }


const obj3 = Object.assign(obj1,obj2,obj5,obj6);  //merge to object copy 

// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const objec1 ={...obj1,...obj2}

// console.log(objec1);


//////////////////////////


const user = [
    {
        id:1,
        email:"h@gmal.com"
    },
    {
        id:1,
        email:"h@gmal.com"
    },
    {
        id:1,
        email:"h@gmal.com"
    },
    {
        id:1,
        email:"h@gmal.com"
    }
]


// console.log(tinderUser);


console.log(Object.keys(tinderUser));  
// [ 'id', 'name', 'isloggedIn' ]
//sari Keys dega apno ko or jese keys dega vese same ek value bhi dega 

console.log(Object.values(tinderUser));
// [ '123abc', 'summy', false ]

console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'summy' ], [ 'isloggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isloggedIn')); //true  property hai 

console.log(tinderUser.hasOwnProperty('gmail')); //false 