// object is collection of key value pair

//singleton -> letrals se banta hai to vo 

//object Literals

const Mysym=Symbol("key1");

const JsUser={
    name :"hitesh",    //name esa "name",
    "full Name":"rnagrez",
    age:18,
    location:"jaipur",
    email:"hitesh@goggle.com",
    isloggedIn:false,

    Mysym:"my key 1",
    [Mysym]:"my key 1",


}

console.log(JsUser.name); //hitesh

console.log(JsUser["email"]); //string lega vo by defult 

// console.log(JsUser.full Name); not accesed by .

console.log( typeof JsUser.Mysym); //mykey1 //string hai not symbol

console.log(JsUser[Mysym]); //mykey1 //string hai not symbol





JsUser.email="hello@gmail.com";

Object.freeze(JsUser);
JsUser.name="allo"; // no change because of freeze

console.log(JsUser);



JsUser.greeting = function (){
    console.log("hello js user");
}

JsUser.greetingTwo = function (){
    console.log(`hello js user,${this.name}`);
}

console.log(
    JsUser.greeting
);  // function return back 


console.log(
    JsUser.greeting()
); 

console.log(
    JsUser.greetingTwo()
); 

