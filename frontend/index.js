const CARDS_URL = 'http://localhost:3000/cards'
const GAME_URL = 'http://localhost:3000/games'
const USER_URL = 'http://localhost:3000/users'

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

const createacctBtn = document.querySelector('.create_account_button')
const newUserForm = document.querySelector('.new_account_div')

let playerCards = []
let cpuCards = []

let currentCard

let currentPlayer

let currentUser

let currentGame

let playerScore = 0
let cpuScore = 0
let gameBoardData = [
    ['','',''],
    ['','',''],
    ['','','']
]
let result
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

        /////////////TOP LEFT ///////////
        /////////////////////////////////
        if (position.id === "top-left") {
            gameBoardData[0][0] = card 
                if (gameBoardData[0][0].right_value > gameBoardData[0][1].left_value) {
                    debugger
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[0][0].bottom_value > gameBoardData[1][0].top_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        //////////////////////////////////////////
        ////////TOP CENTER////////////////////////
        } else if (position.id === "top-center") {
            gameBoardData[0][1] = card
                if (gameBoardData[0][1].left_value > gameBoardData[0][0].right_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[0][1].right_value > gameBoardData[0][2].left_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[0][1].bottom_value > gameBoardData[1][1].top_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        /////////////////////////////////////////
        /////////TOP RIGHT///////////////////////
        } else if (position.id === "top-right") {
            gameBoardData[0][2] = card
                if (gameBoardData[0][2].left_value > gameBoardData[0][1].right_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[0][2].bottom_value > gameBoardData[1][2].top_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        ///////////////////////////////////////////
        /////////MIDDLE LEFT///////////////////////
        } else if (position.id === "middle-left") {
            gameBoardData[1][0] = card
                if (gameBoardData[1][0].top_value > gameBoardData[0][0].bottom_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[1][0].right_value > gameBoardData[1][1].left_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[1][0].bottom_value > gameBoardData[2][0].top_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        /////////////////////////////////////////////
        /////////MIDDLE CENTER///////////////////////
        } else if (position.id === "middle-center") {
            gameBoardData[1][1] = card
                if (gameBoardData[1][1].top_value > gameBoardData[0][1].bottom_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[1][1].right_value > gameBoardData[1][2].left_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[1][1].bottom_value > gameBoardData[2][1].top_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[1][1].left_value > gameBoardData[1][0].right_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        ////////////////////////////////////////////
        ////////MIDDLE RIGHT////////////////////////
        } else if (position.id === "middle-right") {
            gameBoardData[1][2] = card
                if (gameBoardData[1][2].top_value > gameBoardData[0][2].bottom_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[1][2].left_value > gameBoardData[1][1].right_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[1][2].bottom_value > gameBoardData[2][2].top_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        ///////////////////////////////////////////
        ///////BOTTOM LEFT///////////////////////// 
        } else if (position.id === "bottom-left") {
            gameBoardData[2][0] = card
                if (gameBoardData[2][0].right_value > gameBoardData[2][1].left_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[2][0].top_value > gameBoardData[1][0].bottom_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        /////////////////////////////////////////////
        ////////BOTTOM CENTER////////////////////////
        } else if (position.id === "bottom-center") {
            gameBoardData[2][1] = card
                if (gameBoardData[2][1].left_value > gameBoardData[2][0].right_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[2][1].right_value > gameBoardData[2][2].left_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[2][1].top_value > gameBoardData[1][1].bottom_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        ////////////////////////////////////////////
        ///////BOTTOM RIGHT/////////////////////////
        } else if (position.id === "bottom-right") {
            gameBoardData[2][2] = card
                if (gameBoardData[2][2].top_value > gameBoardData[1][2].bottom_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
                if (gameBoardData[2][2].left_value > gameBoardData[2][1].right_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
        }
    } else {
        /////////// Something has to happen here if player tries to play on already taken square! ///////////////


        // freezePlayerHand()
        // addEventListenerToBoard(card)
    }
    updateScoreBoard()
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
    return currentPlayer
}

const cpuThinkTime = () => {
    setTimeout(cpuTurn, 2500)
}

const cpuTurn = () => {
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

 const updateScoreBoard = () => {
    const pScoreH2 = document.querySelector('div.player-cards h2')
    pScoreH2.innerText = `PLAYER: ${playerScore}`
    const cScoreH2 = document.querySelector('div.cpu-cards h2')
    cScoreH2.innerText = `CPU: ${cpuScore}`
}

const createNewGame = () => {
    fetch(GAME_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user_id: 1})
    })
    .then(resp => resp.json())
    .then(obj => {
        // debugger
        currentGame = obj
    })
    .catch(error => alert(error.message))
}

const playGame = async () => {
    createNewGame()
    updateScoreBoard()
    whoStarts()
    while (boardFull() === false) {
        let counter = filledSquares()
        if (currentPlayer === 'CPU') {

            // cpuThinkTime()
            cpuTurn()
            // debugger
            currentPlayer = 'Player'
        } else {
            await playerTurn()
            // debugger
            currentPlayer = 'CPU'
        }
    }
    gameResult()
    setTimeout(declareWinner, 1000)
    updateGame(result)
    setTimeout(resetGame, 2000)
}

const resetGame = () => {
    playerCards = []
    cpuCards = []
    currentCard = null
    currentPlayer = null
    playerScore = 0
    cpuScore = 0
    result = null
    gameBoardData = [
        ['','',''],
        ['','',''],
        ['','','']
    ]
    location.reload()
    currentGame = null
}

const updateGame = gameResult => {
    fetch(GAME_URL + `/${currentGame.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json', 'accept': 'application/json'},
    body: JSON.stringify({result: gameResult})
    })
    .then(resp => resp.json())
    .catch(error => alert(error.message))
}

const gameResult = () => {
    if (playerScore > cpuScore) {
        result = 'WIN'
    } else if (playerScore === cpuScore) {
        result = 'DRAW'
    } else {
        result = "LOSS"
    }
}

const declareWinner = () => {
    if (playerScore > cpuScore) {
        alert(`Player Wins`)
    } else if (playerScore === cpuScore) {
        alert(`It's a Draw`)
    } else {
        alert(`CPU Wins`)
    }
}

const getResults = () => {
    fetch(USER_URL + `/${currentUser.id}/results`)
    .then(resp => resp.json())
    .then(displayResults)
    .catch(error => alert(error.message))
}

const displayResults = results => {

}


// const newGameBtn = document.querySelector('button#setUp')
// const startGameBtn = document.querySelector('button#start')
// newGameBtn.addEventListener('click', event => {
//     getAllCards()
//     newGameBtn.style.zIndex = "0"
// })
// startGameBtn.addEventListener('click', event => {
//     playGame()
//     let buttons = document.querySelectorAll('.buttons')
//     buttons.forEach(button => button.style.display = 'none')
// })

createacctBtn.addEventListener('click', event => {
    console.log
    newUserForm.style.display = "block"
    createacctBtn.style.display = 'none'
})

newUserForm.addEventListener('submit', event => {
    event.preventDefault()
    newUserForm.style.display = "none"
    createUser(event.target)
})

const createUser = (form) => {
    currentUser = form.username.value
        return fetch(USER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: form.name.value,
                username: form.username.value,
                email: form.email.value
            })
            })
            .then(resp => resp.json())
}