// let var const 

// let a=10;
//     const b=20;
//     var c= 30;

// console.log(a);
// console.log(b);
// console.log(c);


// {} //scope

//var c=300;    //changeable hai 
 
let a = 300;

if(true){
    let a=10;  // not change 

    console.log("INNER",a); //block scope 
    const b=20;
   // var c= 30;   //global khai se bhi excces hota hai 
}


console.log(a);
// console.log(b);
// console.log(c);

  