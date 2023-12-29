const coding =["js","cpp","java","c","other"];

//no value return by array for each
const values = coding.forEach((item)=>{
    console.log(item);
    return item
})

console.log(values);  //undfined return kara


// ------******************----------

const mynums = [1,2,3,4,5,6,7,8,9,10]

// return karta hai to store karna padta hai


// const newNums = mynums.filter((num)=> {
//    return num>4
// } )

// console.log(newNums); 

const newNums = []

mynums.forEach((num)=>{
    if(num>4){
        newNums.push(num)   //naye array me push
    }
})


console.log(newNums);


/////////////////////////user Example

// const userbooks = books.filter((bk)=> bk.genre === 'History') 

// const userbooks = book.filter((bk) =>{ 
//     return bk.publish >=2000})  //scope open kiya hai




// console.log(userbooks);