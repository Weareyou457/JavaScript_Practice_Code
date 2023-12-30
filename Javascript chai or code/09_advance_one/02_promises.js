// promise ka mtlb abhi ke abhi task complete nhi hoga (complete or incomlete)

// Future me jakkr complete hota hai (camera device active ex)

//object hai or new keyword se instance mita hia 

// three state hote hai 

// 1. pending 
// 2. fullfill
// 3. rejected 

//promise karahai to fulfill to karna hi padeg ayrr    (bluebird ke baad aaya promises)

//---> fetch("urlll").then(hogya).catch(eroor) nonono


//create kese huva 

const PromiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //db call
    //crytpogrphy , Network call
    setTimeout(() => {
        console.log("async task is complete ");
    }, 1000);

    //connect karna padega 
    resolve();
})

// resolve ka connectio hai direct then ke sath 
// jo bhi kaam promise ne kara usko return karna 

PromiseOne.then(function () {
    console.log("promise consumed ");
})












//simple

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(function () {
    console.log("async 2 resolve");
})

//data passing Conusption

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "chai", email: "chaiorcode.com" })
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})













//data me error 

// or ek andhr ki value ko acces kar skte hai 
const promisefoure = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "hitesh" })
        }
        else {
            reject('Error:went wrong')
        }

    }, 1000);
})

// promisefoure.then().catch()

promisefoure
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {          //andr kki value acces karne ke liye ek or then use kara hai 
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {            //ye to hoga hi hoga 
        console.log("finnaly the promise or resolve or reject");
    })









//using async await 



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", password: "1234" })
        }
        else {
            reject('ERROR : JS went wrong')
        }

    }, 1000);
})


// promiseFive.then NO second approch

async function consumePromisFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromisFive();







//API FETCH

async function getaallUser() {
    try {
        const response = await fetch('https://api.github.com/users/weareyou457')

        const data = await response.json()

        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

getaallUser()


//using  thencatch

// fetch('https://api.github.com/users/weareyou457')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })