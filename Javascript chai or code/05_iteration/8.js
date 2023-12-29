////REDUCES

// shoping cart

const arr=[1,2,3]

// rsult -> accumlator me daal deta or usko cuurent value bana deta or 

// first time pata nhi hota to vo intial value lega 

const mytotal = arr.reduce((acc,currval)=>{
    console.log(`acc :-`,acc);
    console.log(`cur :-`,currval);
    return acc + currval
},0)

console.log(mytotal);


const shoopingCart = [
    {
        itemName:"jscourse",
        price:299
    },
    {
        itemName:"java",
        price:399
    },
    {
        itemName:"cpp",
        price:599
    }
]

const varr = shoopingCart.reduce((acc,item)=>acc+item.price,0)

console.log(varr);