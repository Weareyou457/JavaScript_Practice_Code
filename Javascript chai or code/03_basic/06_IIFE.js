// Immediatley invoked function expresion (IIFE)

//named IIFE
(function chai() {
    console.log("Db Conneted");
})();

// start me hi karvana hoto

// (definction)(exection)
// global scope ke pollution ko htane ke liye IIFE

// ;end karne ke liye dusra bana hoto

(() => {
console.log("DB 1");
})();


//UnNAMED IIFE

((name) => {
    console.log(`DB 1 ${name}  `);
    })('hitesh')
    