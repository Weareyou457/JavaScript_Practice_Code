// primitive (7 type)
// Call by valeu (reference leta hai copy)

// String,Number,Boolearn,null,undefined,Symbol

const score=100
const scoreValue=100.3

const temp=false;
const outSideTemp=null;  //object
let userEmail;

const id = Symbol('123') //Unique
const anotherId = Symbol('123');

console.log(id== anotherId); //flase no same;

// const Bigint=309256321532;



//Non Primitive (Refernce)

//Array , object ,function

const heros=["alfaiz","rangrez","pappu"];

let MyObj ={
    name :"hitesh",
    age:22,
}

const Myfunction = function(){
    console.log("hello World");
}

console.log(typeof Myfunction); //function

console.log(typeof MyObj);
console.log(typeof heros); //object 