let name = "hello world"

console.log(name);

const repoCount = 50;

console.log(name + repoCount);
console.log(name + repoCount + "value");

// hello world50
// hello world50value

//string interpolution

console.log(`Hello my name is ${name}`);

// Hello my name is hello world

const gameName = new String ('Hitesh-hc');

console.log(gameName); //[String: 'Hitesh']



console.log(gameName[0]); //H
// [String: 'Hitesh'] key value pair aaata hai or method aate hai 

console.log(gameName.length); //6




console.log(gameName.toUpperCase());  //HITESH no change original value



console.log(gameName.charAt(2)); //t




console.log(gameName.indexOf('t')); // 2






//break one string 

const newString = gameName.substring(0,4); //Hite

console.log(newString);






// Slice thodna (reverse se bbhi thod skta hai)

const anotherString = gameName.slice(-8,4)  //ite

console.log(anotherString);





// trim (space ignore)

const newStringOne = "     Hitesh   ";

console.log(newStringOne);
console.log(newStringOne.trim());
//     Hitesh    |
// Hitesh









//Replace

const url = "https://hitesh.com/hitesh%20choudhery";

console.log(url.replace('%20',"-")
);

//https://hitesh.com/hitesh-choudhery









//split using char 
const NewOne = "hello-spilt-dash-kaata";

const word = NewOne.split('-');

console.log(word
    );
//[ 'hello', 'spilt', 'dash', 'kaata' ]






