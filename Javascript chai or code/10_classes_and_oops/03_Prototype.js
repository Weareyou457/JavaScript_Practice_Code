let myname = "hitesh    "

// console.log(myname.length); //inbuilt method protoype

//mujhe true length chiye log kare true length without wide spaces

//console.log(myname.trim().length);   //truelength() bnana hai 

let myheroes = ["thore","spiderman"]

let heroPower ={
    thore:"hammer",
    spiderman:"sling",

    getSpiderPower : function () {
        console.log(`spider power ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function (){
    console.log("hitesh is present in all object");
}

Array.prototype.heyHitesh = function(){
    console.log("hitesh sy hello");
}

// myheroes.hitesh();
// heroPower.hitesh()

//heroPower.heyHitesh()
myheroes.heyHitesh()  //power











// __________________INHERITANCE________________

const User = {
    name :"chai",
    email : "chaiorCode"
}

const teacher ={
    makevideo : true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment:'js-assignment',
    fullTime : true,
    __proto__:teachingSupport    //acces miljyea
}


teacher.__proto__=User



// -----------PROBLEM SOLVE --------


let anotherUsername = "CHAIOrCode     ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"alfaiz".trueLength()
"icetea".trueLength()