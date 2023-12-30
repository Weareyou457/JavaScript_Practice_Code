class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`username :- ${this.username}`);
    }

   static createId(){   //satic acces nhi dega 
        return `132`
    }
}

const hitesh = new User("hitesh")

console.log(hitesh.createId()) ///isse koi karega to acces nhi dega static ki wjha se 