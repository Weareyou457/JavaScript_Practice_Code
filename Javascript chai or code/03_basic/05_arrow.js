const user ={
    username:"alfaiz",
    price:999,

    welcomemessage : function () {
        console.log(`${this.username} , welcome to web`);
        console.log(this);
    }
}

//this (current context)

user.welcomemessage()
user.username = "sam"  // contest change hogya to vo fir bhi ese hi hold karega 
user.welcomemessage()


//this log ka 
//OUTPUT---->> alfaiz , welcome to web
// {
//   username: 'alfaiz',
//   price: 999,
//   welcomemessage: [Function: welcomemessage]
// }


// console.log(this);  //{} empty object 




// ------------------------------------------


// function chai() {
//     let username = "hitesh" 
//     console.log(this); // bhut sari value ayeha 
//     console.log(this.username);   //undefind ham use nhi kar skte  
// }
// chai()



const chai = () => {
    let username = "hitesh" 
    console.log(this.username);   
}

chai()



//basic


// const addtwo =(num1,num2) => {
//     return num1+num2
// }


const addtwo1 =(num1,num2) => num1+num2    //emplict return 


const addtwo2 =(num1,num2) => (num1+num2)    //emplict return 


const addtwo3 =(num1,num2) => {username:"alfaiz"}   //undefind


const addtwo =(num1,num2) => ({username:"alfaiz"})   //undefind

console.log(addtwo(2,3));