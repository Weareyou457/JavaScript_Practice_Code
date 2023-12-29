//for loop

// for (let i = 0; i <=10; i++) {
//     console.log(i) 
// }


// for (let i = 0; i <=10; i++) {
//     console.log(`outerLopp : ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`outerLopp : ${i} inner loop ${j}`);
//     }
    
// }


// let myarray = ["bitman","batman","superman"]

// for (let i = 0; i < myarray.length; i++) {
//     const element = myarray[i];
//     console.log(element);
    
// }


//break or continue 

// for (let index = 0; index <=20; index++) {
//     if(index == 5){
//         break //ROkna
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 0; index <=20; index++) {
    if(index == 5){
        continue //skip
    }
    console.log(`value of i is ${index}`);
}