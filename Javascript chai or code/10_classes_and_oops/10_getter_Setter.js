class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return `${this._email}.AIGENOI`
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitresh`
    }

    set password(value){
        this._password= value
    }
}

const hitesh = new User("hello@gmail","acc")

console.log(hitesh.password);
console.log(hitesh.email);


