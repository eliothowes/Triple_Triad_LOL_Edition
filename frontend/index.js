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
let globalPromiseResolve = () => {}


const getAllCards = () => {
    return fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(assignCards)
    .then(addUserCardsToHand)
    // .then(playGame)
    // .then(addEventListenersToPlayersHand(playerCards))
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
    // addUserCardsToHand(playerCards)    
}

const addUserCardsToHand = () => { 
    playerCardEl.forEach((position, index) => {
        // debugger
        position.style.backgroundImage = `url(${playerCards[index].img})`  
    })
}

const addEventListenersToPlayersHand = () => {
    playerCardEl.forEach((position, index) => {
        position.addEventListener('click', namedEventListener)
    })
    // playerHand.addEventListener('click', namedEventListener)
}

const namedEventListener = (event) => {
    // debugger
    if (event.target.className === "player-card") {
        //  => handlePlayerCardClickEvent(event, playerCards[index]), {once: true}
        handlePlayerCardClickEvent(event, playerCards[event.target.dataset.index])
        // debugger
        event.target.removeEventListener('click', namedEventListener)
    }
}

const handlePlayerCardClickEvent = (event, card) => {
    // debugger
    event.target.style.backgroundImage = ''
    event.target.style.backgroundColor = "#f4f4f4"
    freezePosition(event.target)
    addEventListenerToBoard(card)
}

const addEventListenerToBoard = card => {
    gameBoard.addEventListener('click', event => {addCardToBoard(event.target, card); globalPromiseResolve()}, {once: true})
}

const freezePosition = position => {
    position.classList.add('freeze')
}

const unfreezePlayerHand = () => {
    playerCardEl.forEach(position => position.classList.remove('freeze'))
}

const positionEmpty = position => {
    return position.style.backgroundImage === ''
}

const addCardToBoard = (position, card) => {
    if (positionEmpty(position)) {
        // debugger
        // unfreezePlayerHand()
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
        // freezePlayerHand()
        // addEventListenerToBoard(card)
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
    console.log('It is now your turn') 
    addEventListenersToPlayersHand()

    return new Promise((resolve, reject) => globalPromiseResolve = resolve)
}

const boardFull = () => {
    if (!![...boardPositions].find(position => {return position.style.backgroundImage === ''})) {
        return false
    } else {
        return true
    }
}

const filledSquares = () => {
    let filledSqr = 0
     filledSqr += gameBoardData[0].reduce((accumulator, currentValue) => accumulator + (currentValue !== '' ? 1 : 0), 0)
     filledSqr += gameBoardData[1].reduce((accumulator, currentValue) => accumulator + (currentValue !== '' ? 1 : 0), 0)
     filledSqr += gameBoardData[2].reduce((accumulator, currentValue) => accumulator + (currentValue !== '' ? 1 : 0), 0)
     return filledSqr
 }

const playGame = async () => {
    // getAllCards()
    whoStarts()
    while (boardFull() === false) {
        let counter = filledSquares()
        if (currentPlayer === 'CPU') {
            // cpuThinkTime()
            cpuTurn()
            currentPlayer = 'Player'
        // } else if (currentPlayer === 'Player')  {
        } else {
            // let firstTime = true
            // while (counter === filledSquares()) {
            //     console.log("Filled Squares: ", filledSquares())
            //     if (firstTime) playerTurn()
            //     firstTime = false
            // }
            // currentPlayer = 'CPU'
            await playerTurn()
            currentPlayer = 'CPU'
        }
    }
    setTimeout(() => {alert('GAME FINISHED')}, 1000)
}

const newGameBtn = document.querySelector('.header button')
const startGameBtn = document.querySelector('button#start')
newGameBtn.addEventListener('click', event => getAllCards())
startGameBtn.addEventListener('click', event => playGame())


