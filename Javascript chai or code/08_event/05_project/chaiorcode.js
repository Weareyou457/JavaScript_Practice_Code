//Rarndom Genrate COlor 


const RandomColor = function(){
    const hex="0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16 )]
        
    }

    return color;

}

console.log(RandomColor());

let intervalid;
const startChangingColor = function () {

    intervalid = setInterval(changeBgcolor,1000);
    
    function changeBgcolor() {
        document.body.style.backgroundColor = RandomColor();
    }
    
}

const stopChangingColor = function () {

clearInterval(intervalid)
// intervalid = null;
    
}

document.querySelector("#start").addEventListener('click', startChangingColor )
document.querySelector("#stop").addEventListener('click',stopChangingColor)

