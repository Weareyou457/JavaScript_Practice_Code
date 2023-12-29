//neasted scope or Closure 

function one (){
    const userName ="alfaiz"

    function two() {
        const website = "youtube"
        console.log(userName);
    }

    // console.log(website);  //khah acces kar rahe ho 

    two()
}
one()

//chote bado se icecream le skte hai but bade nhi 

// function ke ek alg scope banta hai 

// andhr ka function bhar ke variable ko exxces karta hai CLOUSER



if(true){
    const userName = "alfaiz"
    if(userName === "alfaiz"){
        const website ="youtube"
    }

    // console.log(website); no acess
}

// console.log(userName);






// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++INTERSETING+++++++++++++++


console.log(addone(5));


function addone(num) {
    return num+1
}


console.log(addTwo( 5) );  //error upr nhi kar skte hai  (hold hai to ye hai hoisting)

const addTwo = function addTwo(value)  {    //expresion hota hai ye 
    return value + 2
}

//differnce hai ki declaretion ke phele excess

      



