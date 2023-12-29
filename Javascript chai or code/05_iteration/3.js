// for of 

// ["",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const iterator of object) {
    
// }

for (const num of arr){
    console.log(num);
}

const greetnigs = "hello World";

for (const greet of greetnigs){
    console.log("for each value ",greet);
}

// MAPS

const map = new Map()
map.set('IN','india')
map.set('USA','united state of america')
map.set('Fr','France')
map.set('Fr','France')

console.log(map);

for (const [key,value] of map){
    console.log(key+" "+value);
}


// Object (nhi lagega)

const obj={
    'gam1':'nfs',
    'gam2':'spoder'
}

for(const [key,value]of obj){      // obj is not iterable
    // console.log(key+" "+value);
}