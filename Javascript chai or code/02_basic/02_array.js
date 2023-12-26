const marvel_heroes =["thor","ironman","spiderman"];

const dc = ["superman","falsh","batman"]

// **************

marvel_heroes.push(dc) //combine krke array as a data le liya us ne 

console.log(marvel_heroes); 
console.log(marvel_heroes[3]); //ek array 


// ******************



const allheros = marvel_heroes.concat(dc);  //return new array alll element
console.log(allheros);  


//****************

const allNewHeros= [...marvel_heroes,...dc]  //concate bhut sari add kr skte hai 
console.log(allNewHeros);

//**************** 


const anotherArray= [1,2,3,[4,5,6],7,[6,7[4,5]]]

const realAnotherArray =anotherArray.flat(Infinity);//kitni depth tak solve karu

console.log(realAnotherArray);















console.log(Array.isArray("hitesh")); //false array nhi hai 

console.log(Array.from("hitesh"));
//[ 'h', 'i', 't', 'e', 's', 'h' ]


console.log(Array.from({name:"hitesh"}));
//[] intresting 


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ]