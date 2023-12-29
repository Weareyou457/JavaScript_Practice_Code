const coding =["js","cpp","java","c","other"];

//call back funtion -> no name or no bracket
coding.forEach(function(value){
    console.log(value);
})



coding.forEach((val)=>{
    console.log(val);
})



function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

//more

coding.forEach( (item,index,arraylist)=> {
    console.log(item+" "+index+" "+arraylist);
})

//as a object

const mycoding = [
    {
        language :"javascript ",
        langaugeFileName:"js",
    },
    {
        language :"java ",
        langaugeFileName:"java",
    },
    {
        language :"Cpp ",
        langaugeFileName:"cpp",
    }
]

mycoding.forEach((item)=>{
    console.log(item.language);
    console.log(item.langaugeFileName);
})

