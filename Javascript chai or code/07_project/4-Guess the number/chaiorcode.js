// console.log(Math.random);


const randomNumber =parseInt(Math.random()*100+1)


const sumbit =document.querySelector('#subt')

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHigh = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGues =1 

let playGame = true;

if(playGame){
    sumbit.addEventListener('click',function (e) {
        e.preventDefault()

       const guess =parseInt(userInput.value)
       console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){

    if(isNaN(guess) || guess<1 || guess >100){
        alert('please add valid number')
    }
    else{
        prevGuess.push(guess);
        if(numGues === 11){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${randomNumber}`)
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){

    if(guess === randomNumber){
        displayMessage('you Guessed It Right')
    }
    else if (guess<randomNumber){
        displayMessage('Number is TOoo LOwww')
    }
    else if (guess>randomNumber){
        displayMessage('Number is TOoo highwww')
    }

}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess}`
    numGues++;

    remaining.innerHTML = `${11-numGues}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id='endGame'>Start New Game</h2>`

    startOver.appendChild(p)
    playGame = false;
    newGame()
}

function newGame() {

    const newGameButton = document.querySelector('#newGame')

    newGameButton.addEventListener('click',function (e) {
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGues =1 
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGues}`
userInput.removeAttribute('disabled')
startOver.removeChild(p);

        playGame = true
    })
    
}