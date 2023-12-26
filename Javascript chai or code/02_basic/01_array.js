//array 
const array3 = [12,33,"qwjnf",true,6,7]
const array = [12,33,45,6,7]
const myHeros=["shkitman","bubbo"];

const myarray = new Array(1,2,3,4)

console.log(array);
console.log(myHeros);
console.log(myarray);


//resizeable add more element
//value acces karna hoto
console.log(array[0]);

//array is zero based index

// array shalloew copy banata hai 


let arrayop=[1,2,3,4,5,6,7];

// arrayop.push(6);
// arrayop.pop();

// arrayop.unshift(9); //added zero aage
// arrayop.shift();


// console.log(arrayop.includes(8));  //no false boolean

// console.log(arrayop.indexOf(9)); //-1 nhi hai 



const newArray = arrayop.join() //converted string with seprte

// console.log(arrayop);
// console.log(newArray);




//slice or splice

console.log("A",arrayop);


const myn1=arrayop.slice(1,3)

console.log(myn1);

console.log("B",arrayop);

const myn2=arrayop.splice(1,3)  //portion hi nikl jata hai orignal array me se 

console.log("C",arrayop);

console.log(myn2);

// A [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]
//   [ 2, 3 ]
//   B [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]
//   C [ 1, 5, 6, 7 ]
//   [ 2, 3, 4 ]