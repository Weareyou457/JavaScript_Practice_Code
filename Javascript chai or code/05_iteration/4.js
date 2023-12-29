// object for in 

const myobject ={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by app"
}

for (const key in myobject){
    console.log(key);
}

console.log("----------------");

for (const key in myobject){
    console.log(`Key hai object ki `,myobject[key]);
}

//array

const arr =[1,2,3,4,5];

for(const value in arr){
    console.log(value);
}

for(const value in arr){
    console.log(arr[value]);
}



// map 
const map = new Map()
map.set('IN','india')
map.set('USA','united state of america')
map.set('Fr','France')
map.set('Fr','France')


for(const key in map){
    console.log(key);      // not itreatable ispr nhi lagega 
}


