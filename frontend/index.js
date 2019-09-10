const CARDS_URL = 'http://localhost:3000/cards'

const gameBoard = document.querySelector('.game-board')

const topLeft = document.getElementById('top-left')
const topCenter = document.getElementById('top-center')
const topRight = document.getElementById('top-right')
const middleLeft = document.getElementById('middle-left')
const middleCenter = document.getElementById('middle-center')
const middleRight = document.getElementById('middle-right')
const bottomLeft = document.getElementById('bottom-left')
const bottomCenter = document.getElementById('bottom-center')
const bottomRight = document.getElementById('bottom-right')

const playerCard1 = document.querySelector('.player-card#pc-1')
const playerCard2 = document.querySelector('.player-card#pc-2')
const playerCard3 = document.querySelector('.player-card#pc-3')
const playerCard4 = document.querySelector('.player-card#pc-4')
const playerCard5 = document.querySelector('.player-card#pc-5')

const playerHand = document.querySelectorAll('.player-card')
const cpuHand = document.querySelectorAll('.cpu-card')

let playerCards = []
let cpuCards = []
let currentCard

const getAllCards = () => {
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(startGame)
    .catch(error => alert(error.message))
}

const startGame = cards => {
    assignUserCards(cards)
    assignCpuCards(cards)
}

const assignCpuCards = cards => {
    for (let i = 0; i<5; i++ ) {
        cpuCards.push(cards[Math.floor(Math.random()*cards.length)])
    }
    assignCpuCardsToHand(cpuCards)
}
const assignCpuCardsToHand = cpuCards => {
    cpuHand.forEach((position, index) => {
        position.addEventListener('click', event => handleHandCardClickEvent(event, cpuCards[index]), {once: true})
    })
}

const assignUserCards = cards => {
    for (let i = 0; i<5; i++ ) {
    playerCards.push(cards[Math.floor(Math.random()*cards.length)])
    }
    addUserCardsToHand(playerCards)    
}

const addUserCardsToHand = playerCards => { 
    playerHand.forEach((position, index) => {
        position.style.backgroundImage = `url(${playerCards[index].img})`
        position.addEventListener('click', event => handleHandCardClickEvent(event, playerCards[index]), {once: true})
    })
}

const handleHandCardClickEvent = (event, card) => {
    event.target.style.backgroundImage = ''
    event.target.style.backgroundColor = "#f4f4f4"
    addEventListenerToBoard(card)
}


const addEventListenerToBoard = card => {
    gameBoard.addEventListener('click', event => addCardToBoard(event.target, card), {once: true})
}

const addCardToBoard = (position, card) => {
    
    position.style.backgroundImage = `url(${card.img})`
    position.style.opacity = '.6'
}

const moveCard = () => {
    debugger
}

window.addEventListener('load', getAllCards)

// gameBoard = [
//     ['','',''],
//     ['','',''],
//     ['','','']
// ]