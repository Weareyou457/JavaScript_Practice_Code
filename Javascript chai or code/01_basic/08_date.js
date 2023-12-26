// single moment in time ajnuuary 1 se 

//TC39 tempral api hai to future me date jo hai to temporal api ko global object ban degga 

//DATE

let myDate = new Date ()

console.log(myDate);
//2023-12-26T14:12:17.124Z

console.log(myDate.toString());
//Tue Dec 26 2023 19:42:42 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());
//2023-12-26T14:13:00.442Z

console.log(myDate.toLocaleDateString());
//12/26/2023

console.log(typeof myDate); //object 






//declare date 

// let mycreatedDate = new Date(2023,0,23)

let mycreatedDate = new Date(2023,0,23,5,3)
console.log(mycreatedDate.toString());

//Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time)

// Mon Jan 23 2023 05:03:00 GMT+0530 (India Standard Time)

let myTImeStamp =  Date.now()

console.log(myTImeStamp);

console.log(mycreatedDate.getTime());  //time round off

console.log(Math.floor(Date.now()/1000));







///curent date 


let newDate = new Date()

console.log(newDate);
console.log(newDate.getMonth() + 1); //moth 
console.log(newDate.getDate());




