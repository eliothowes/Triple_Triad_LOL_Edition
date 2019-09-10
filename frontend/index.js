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
const boardPositions = document.querySelectorAll('.game-square')

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

let gameBoardData = [
    ['','',''],
    ['','',''],
    ['','','']
]

const addCardToBoard = (position, card) => {
    
    position.style.backgroundImage = `url(${card.img})`
    position.style.opacity = '.6'

    if (position.id === "top-left") {
        gameBoardData[0][0] = card 
    } else if (position.id === "top-center") {
        gameBoardData[0][1] = card
    } else if (position.id === "top-right") {
        gameBoardData[0][2] = card
    } else if (position.id === "middle-left") {
        gameBoardData[1][0] = card
    } else if (position.id === "middle-center") {
        gameBoardData[1][1] = card
    } else if (position.id === "middle-right") {
        gameBoardData[1][2] = card
    } else if (position.id === "bottom-left") {
        gameBoardData[2][0] = card
    } else if (position.id === "bottom-center") {
        gameBoardData[2][1] = card
    } else if (position.id === "bottom-right") {
        gameBoardData[2][2] = card
    }
}

const findEmptySquare = () => {
    return [...boardPositions].find(square => {
        return square.style.backgroundImage === ''
    })
}

window.addEventListener('load', getAllCards)
