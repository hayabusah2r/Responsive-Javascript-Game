const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'papers'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You Lose :('
    }
    if (computerChoice === 'rock' && userChoice === "papers") {
        result = 'You Win :)'
    }
    if (computerChoice === 'papers' && userChoice === "rock") {
        result = 'You Lose :('
    }
    if (computerChoice === 'papers' && userChoice === "scissors") {
        result = 'You Win :)'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You Win :)'
    }
    if (computerChoice === 'scissors' && userChoice === "papers") {
        result = 'You Lose :('
    }
    resultDisplay.innerHTML = result
}