const score = 500;
console.log(score); //not type number 
console.log(typeof score);

const Balance = new Number (100);
console.log(Balance);
//[Number: 100] specially number

console.log(Balance.toString().length); // string length 3 

console.log(Balance.toFixed(2));
//100.00

const other = 123.8966;  //23.8966

console.log(other.toPrecision(3));//23.9  //124

const hunderes = 1000000;
console.log(hunderes.toLocaleString());
//1,000,000
console.log(hunderes.toLocaleString('en-IN'));
//10,00,000





/********************MATH*********************/



console.log(Math); //Object [Math] {}

console.log(Math.PI); //3.141592653589793

console.log(Math.abs(-4)); //4

console.log(Math.round(4.8)); //5 

console.log(Math.ceil(4.3)); //5 uppr

console.log(Math.floor(4.6)); //4 

console.log(Math.max(4,5,6,7,3,23)); //23

//RANDOM USING PROJECT
console.log(Math.random()); //o approx value

console.log((Math.random()*10) + 1);  // vlaue 1-10 .309263 random

console.log(Math.floor(Math.random()*10) + 1);  // vlaue 1-10 random


const min =10
const max = 20

console.log(Math.floor(Math.random()* (max-min+1))+min);

