const useremail = "useremail.com"

if(useremail){       //yhi truty value hai 
    console.log(
        "Got email value"
    );
}
else{
    console.log("no");
}


// falsy value 

// 1. false 
// 2. 0
// 3. -0
// 4. BigInt 0n
// 5. null
// 6. undefined
// 7. Nan
// 8. ""

//truty values

// 1. "0"
// 2. 'false'
// 3. " "
// 4. [] , {}
// 5. funtion(){}



const emptyobj ={}

if(Object.keys(emptyobj).length===0){
    console.log("empty");
}


// nullish Coalescing Operator (??): null defined 

let val1;

// val1 = 5 ?? 10          //5 
// val1 = null ?? 10       //10 saffty check
var1 = undefined ?? 15     //undefined


console.log(val1);



//terinary Operator 

// conditon ? true : false 

const icetea= 100

icetea >=80 ? console.log("khrid"): console.log("rhne de")


