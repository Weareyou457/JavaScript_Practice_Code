//map 

const mynumbers = [1,2,3,4,5,6,7,8,9,0]

// const newnums = mynumbers.map((num)=>{
//      num + 10   //UNDEFINED
//  })

const newnums = mynumbers.map((num)=>{
   return num + 10
})

console.log(newnums);




//CHAINING (result pass on second chain)

// const newNUmss = mynumbers.map().map().filter()

const newNums1 = mynumbers
        .map((nums)=>nums*10)
        .map((nums)=>nums+1)
        .filter((num) => num>40)

        console.log(newNums1);