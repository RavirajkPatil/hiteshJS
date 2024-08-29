let random = parseInt(Math.random()*100+1)

let submit = document.querySelector('#subt')
let userInput = document.querySelector('#guessField')
let guessSlot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    document.addEventListener('submit',function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert(`Please enter a valid number`)
    } else if(guess < 1){
        alert(`Please enter the number more than 1`)
    } else if(guess > 100){
        alert(`Please enter the number less than 100`)
    } else{
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game over. Random number was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess==random){
        displayMessage(`You guessed it write`)
        endGame()
    } else if(guess < random){
        displayMessage(`Number is too low`)
    } else if(guess < random){
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${10-numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')   // to disable input
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e) {
        random = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}
