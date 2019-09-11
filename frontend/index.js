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

const playerCardEl = document.querySelectorAll('.player-card')
const cpuHand = document.querySelectorAll('.cpu-card')
const playerHand = document.querySelector('.player-cards')
const boardPositions = document.querySelectorAll('.game-square')

let playerCards = []
let cpuCards = []
let currentCard
let currentPlayer
let gameBoardData = [
    ['','',''],
    ['','',''],
    ['','','']
]


const getAllCards = () => {
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(assignCards)
    .then(addEventListenersToPlayersHand(playerCards))
    .catch(error => alert(error.message))
}

const assignCards = cards => {
    assignPlayerCards(cards)
    assignCpuCards(cards)
}

const assignCpuCards = cards => {
    for (let i = 0; i<5; i++ ) {
        cpuCards.push(cards[Math.floor(Math.random()*cards.length)])
    }
}

const assignPlayerCards = cards => {
    for (let i = 0; i<5; i++ ) {
    playerCards.push(cards[Math.floor(Math.random()*cards.length)])
    }
    addUserCardsToHand(playerCards)    
}

const addUserCardsToHand = playerCards => { 
    playerCardEl.forEach((position, index) => {
        position.style.backgroundImage = `url(${playerCards[index].img})`  
    })
}

const addEventListenersToPlayersHand = playerCards => {
    playerCardEl.forEach((position, index) => {
        position.addEventListener('click', event => handlePlayerCardClickEvent(event, playerCards[index]), {once: true})
    })
}

const handlePlayerCardClickEvent = (event, card) => {
    event.target.style.backgroundImage = ''
    event.target.style.backgroundColor = "#f4f4f4"
    freezePlayerHand()
    addEventListenerToBoard(card)
}

const addEventListenerToBoard = card => {
    gameBoard.addEventListener('click', event => {addCardToBoard(event.target, card)}, {once: true})
}

const freezePlayerHand = () => {
    playerCardEl.forEach(position => position.classList.add('freeze'))
}

const unfreezePlayerHand = () => {
    playerCardEl.forEach(position => position.classList.remove('freeze'))
}

const positionEmpty = position => {
    return position.style.backgroundImage === ''
}

const addCardToBoard = (position, card) => {
    if (positionEmpty(position)) {
        unfreezePlayerHand()
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
    } else {
        freezePlayerHand()
        addEventListenerToBoard(card)
    }
}

const findEmptySquare = () => {
    return [...boardPositions].find(square => {
        return square.style.backgroundImage === ''
    })
}

const whoStarts = () => {
    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
        currentPlayer = 'CPU'
    } else {
        currentPlayer = 'Player'
    }
}

// let cpuTimer

// const cpuThinkTime = () => {
//     cpuTimer = setTimeout(cpuTurn, 2500)
// }

const cpuTurn = () => {
    // clearTimeout(cpuTimer)
    console.log('CPU taking a turn')
    let square = findEmptySquare()
    addCardToBoard(square, cpuCards[0])
    cpuCards.shift()
}

const playerTurn = () => {
    console.log('Youve had a turn') 
}

const boardFull = () => {
    if (!![...boardPositions].find(position => {return position.style.backgroundImage === ''})) {
        return false
    } else {
        return true
    }
}

const playGame = () => {
    whoStarts()
    while (boardFull() === false) {
        if (currentPlayer === 'CPU') {
            // cpuThinkTime()
            cpuTurn()
            currentPlayer = 'Player'
        } else if (currentPlayer === 'Player')  {
            playerTurn()
            currentPlayer = 'CPU'
        }
    }
}

window.addEventListener('load', getAllCards)