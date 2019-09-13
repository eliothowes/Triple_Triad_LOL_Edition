const CARDS_URL = 'http://localhost:3000/cards'
const GAME_URL = 'http://localhost:3000/games'
const USER_URL = 'http://localhost:3000/users'

const gameBoard = document.querySelector('.game-board')

const victory = document.querySelector('.victory')
const loss = document.querySelector('.loss')
const draw = document.querySelector('.draw')

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

const logInBtn = document.querySelector('.log_in_button')
const logInForm = document.querySelector('.log_in_div ')

let playerCards = []
let cpuCards = []

let currentCard
let currentPlayer

let currentUserObj
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

const sleep = ms =>
	new Promise(resolve => setTimeout(resolve, ms))

const getAllCards = () => {
    return fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(assignCards)
    .then(addUserCardsToHand)
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
    cpuCards.forEach(card => card.owner = 'CPU')
}

const assignPlayerCards = cards => {
    for (let i = 0; i<5; i++ ) {
    playerCards.push(cards[Math.floor(Math.random()*cards.length)])
    }
    playerCards.forEach(card => card.owner = 'Player')
}

const addUserCardsToHand = () => { 
    playerCardEl.forEach((position, index) => {
        position.style.backgroundImage = `url(${playerCards[index].img})`  
    })
}

const addEventListenersToPlayersHand = () => {
    playerCardEl.forEach((position, index) => {
        position.addEventListener('click', namedEventListener)
    })
}

const namedEventListener = (event) => {
    if (event.target.className === "player-card") {
        handlePlayerCardClickEvent(event, playerCards[event.target.dataset.index])
        event.target.removeEventListener('click', namedEventListener)
    }
}

const handlePlayerCardClickEvent = (event, card) => {
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
        if (card.owner === 'Player') {
        position.style.backgroundImage = `url("https://mod-3-project.s3.eu-west-2.amazonaws.com/player_border.png"), url(${card.img})`
        position.style.opacity = '.75'
        } else {
            position.style.backgroundImage = `url("https://mod-3-project.s3.eu-west-2.amazonaws.com/cpu_border.png"), url(${card.img})`
            position.style.opacity = '.75'
        }
        /////////////TOP LEFT ///////////
        /////////////////////////////////
        if (position.id === "top-left") {
            gameBoardData[0][0] = card
            if (gameBoardData[0][0].owner != gameBoardData[0][1].owner) {
                if (gameBoardData[0][0].right_value > gameBoardData[0][1].left_value) {
                     
                    if (currentPlayer === 'Player'){
                        // gameBoardData[0][1].owner = 'Player'
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[0][0].owner != gameBoardData[1][0].owner) {
                if (gameBoardData[0][0].bottom_value > gameBoardData[1][0].top_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        //////////////////////////////////////////
        ////////TOP CENTER////////////////////////
        } else if (position.id === "top-center") {
            gameBoardData[0][1] = card
            if (gameBoardData[0][1].owner != gameBoardData[0][0].owner) {
                if (gameBoardData[0][1].left_value > gameBoardData[0][0].right_value){
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[0][1].owner != gameBoardData[0][2].owner) {
                if (gameBoardData[0][1].right_value > gameBoardData[0][2].left_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[0][1].owner != gameBoardData[1][1].owner) {
                if (gameBoardData[0][1].bottom_value > gameBoardData[1][1].top_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        /////////////////////////////////////////
        /////////TOP RIGHT///////////////////////
        } else if (position.id === "top-right") {
            gameBoardData[0][2] = card
            if (gameBoardData[0][2].owner != gameBoardData[0][1].owner) {
                if (gameBoardData[0][2].left_value > gameBoardData[0][1].right_value){
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[0][2].owner != gameBoardData[1][2].owner) {
                if (gameBoardData[0][2].bottom_value > gameBoardData[1][2].top_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        ///////////////////////////////////////////
        /////////MIDDLE LEFT///////////////////////
        } else if (position.id === "middle-left") {
            gameBoardData[1][0] = card
            if (gameBoardData[1][0].owner != gameBoardData[0][0].owner) {
                if (gameBoardData[1][0].top_value > gameBoardData[0][0].bottom_value){
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[1][0].owner != gameBoardData[1][1].owner) {
                if (gameBoardData[1][0].right_value > gameBoardData[1][1].left_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[1][0].owner != gameBoardData[2][0].owner) {
                if (gameBoardData[1][0].bottom_value > gameBoardData[2][0].top_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        /////////////////////////////////////////////
        /////////MIDDLE CENTER///////////////////////
        } else if (position.id === "middle-center") {
            gameBoardData[1][1] = card
            if (gameBoardData[1][1].owner != gameBoardData[0][1].owner) {
                if (gameBoardData[1][1].top_value > gameBoardData[0][1].bottom_value){
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[1][1].owner != gameBoardData[1][2].owner) {
                if (gameBoardData[1][1].right_value > gameBoardData[1][2].left_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[1][1].owner != gameBoardData[2][1].owner) {
                if (gameBoardData[1][1].bottom_value > gameBoardData[2][1].top_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[1][1].owner != gameBoardData[1][0].owner) {
                if (gameBoardData[1][1].left_value > gameBoardData[1][0].right_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        ////////////////////////////////////////////
        ////////MIDDLE RIGHT////////////////////////
        } else if (position.id === "middle-right") {
            gameBoardData[1][2] = card
            if (gameBoardData[1][2].owner != gameBoardData[0][2].owner) {
                if (gameBoardData[1][2].top_value > gameBoardData[0][2].bottom_value){
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[1][2].owner != gameBoardData[1][1].owner) {
                if (gameBoardData[1][2].left_value > gameBoardData[1][1].right_value){
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[1][2].owner != gameBoardData[2][2].owner) {
                if (gameBoardData[1][2].bottom_value > gameBoardData[2][2].top_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        ///////////////////////////////////////////
        ///////BOTTOM LEFT///////////////////////// 
        } else if (position.id === "bottom-left") {
            gameBoardData[2][0] = card
            if (gameBoardData[2][0].owner != gameBoardData[2][1].owner) {
                if (gameBoardData[2][0].right_value > gameBoardData[2][1].left_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[2][0].owner != gameBoardData[1][0].owner) {
                if (gameBoardData[2][0].top_value > gameBoardData[1][0].bottom_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        /////////////////////////////////////////////
        ////////BOTTOM CENTER////////////////////////
        } else if (position.id === "bottom-center") {
            gameBoardData[2][1] = card
            if (gameBoardData[2][1].owner != gameBoardData[2][0].owner) {
                if (gameBoardData[2][1].left_value > gameBoardData[2][0].right_value){
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[2][1].owner != gameBoardData[2][2].owner) {
                if (gameBoardData[2][1].right_value > gameBoardData[2][2].left_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[2][1].owner != gameBoardData[1][1].owner) {
                if (gameBoardData[2][1].top_value > gameBoardData[1][1].bottom_value) {
                     
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        ////////////////////////////////////////////
        ///////BOTTOM RIGHT/////////////////////////
        } else if (position.id === "bottom-right") {
            gameBoardData[2][2] = card
            if (gameBoardData[2][2].owner != gameBoardData[1][2].owner) {
                if (gameBoardData[2][2].top_value > gameBoardData[1][2].bottom_value){
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
            if (gameBoardData[2][2].owner != gameBoardData[2][1].owner) {
                if (gameBoardData[2][2].left_value > gameBoardData[2][1].right_value) {
                    if (currentPlayer === 'Player'){
                        ++playerScore
                    } else {
                        ++cpuScore
                    }
                }
            }
        }
    } else {
        /////////// Something has to happen here if player tries to play on already taken square! ///////////////
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
    let square = selectRandomFreeSpace()
    // let square = findEmptySquare()
    addCardToBoard(square, cpuCards[0])
    cpuCards.shift()
}

const playerTurn = () => {
    addEventListenersToPlayersHand()
    return new Promise(resolve => globalPromiseResolve = resolve)
}

const boardFull = () => {
    if (!![...boardPositions].find(position => {return position.style.backgroundImage === ''})) {
        return false
    } else {
        return true
    }
}

 const updateScoreBoard = () => {
    const pScoreH3 = document.querySelector('.player-score')
    pScoreH3.innerText = `${playerScore}`
    const cScoreH3 = document.querySelector('.cpu-score')
    cScoreH3.innerText = `${cpuScore}`
}

const createNewGame = () => {
    fetch(GAME_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user_id: currentUserObj.id})
    })
    .then(resp => resp.json())
    .then(obj => {currentGame = obj})
    .catch(error => alert(error.message))
}

const playGame = async () => {
    createNewGame()
    updateScoreBoard()
    whoStarts()
    while (boardFull() === false) {
        if (currentPlayer === 'CPU') {
            await sleep(2500)
            cpuTurn()
            currentPlayer = 'Player'
        } else {
            await playerTurn()
            currentPlayer = 'CPU'
        }
    }
    gameResult()
    setTimeout(declareWinner, 1000)
    updateGame(result)
    // setTimeout(resetGame, 2000)
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
    setTimeout(resetGame, 5000)
}

const declareWinner = () => {
    if (playerScore > cpuScore) {
        victory.style.display = 'inline-block'
        // alert(`Player Wins`)
        victory.addEventListener('click', event => {victory.style.display = "none"})
    } else if (playerScore === cpuScore) {
        draw.style.display = 'inline-block'
        // alert(`It's a Draw`)
        draw.addEventListener('click', event => {draw.style.display = "none"})
    } else {
        loss.style.display = 'inline-block'
        // alert(`CPU Wins`)
        loss.addEventListener('click', event => {loss.style.display = "none"})
    }
}

const displayResults = results => {
    const stats = document.querySelector('.player-stats')
    stats.innerText = `${currentUser  } W: ${results['wins']  } D: ${results['draws']  } L: ${results['losses']  }`
}

const getResults = () => {
    fetch(USER_URL + `/${currentUserObj.id}/results`)
    .then(resp => resp.json())
    .then(displayResults)
    .catch(error => alert(error.message))
}

createacctBtn.addEventListener('click', event => {
    newUserForm.style.display = "block"
    createacctBtn.style.display = 'none'
    logInBtn.style.display = 'none'
})

newUserForm.addEventListener('submit', event => {
    event.preventDefault()
    newUserForm.style.display = "none"
    createUser(event.target)
    newGameBtn.style.display = "inline-block"
    startGameBtn.style.display = "inline-block"
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
            .then(logInBtn.style.display = 'none')
}

logInBtn.addEventListener('click', event => {
    logInForm.style.display = "block"
    logInBtn.style.display = 'none'
    createacctBtn.style.display = 'none'
})

logInForm.addEventListener('submit', event => {
    event.preventDefault()
    logInForm.style.display = "none"
    logInUser(event.target)
    newGameBtn.style.display = "inline-block"
    startGameBtn.style.display = "inline-block"
})

const logInUser = (form) => {
    return fetch(`${USER_URL}/${form.username.value}`)
    .then(resp => resp.json())
    .then(user => {
        currentUserObj = user
        currentUser = user.name
        getResults()
    })
    .catch(error => alert(error.message))
}

const newGameBtn = document.querySelector('img#setUp')
const startGameBtn = document.querySelector('img#start')

newGameBtn.addEventListener('click', event => {
    getAllCards()
    newGameBtn.style.zIndex = "0"
})

startGameBtn.addEventListener('click', event => {
    playGame()
    let buttons = document.querySelectorAll('.buttons')
    buttons.forEach(button => button.style.display = 'none')
})

const logout = () => {
    let currentUserObj = null
    let currentUser = null
}

const selectRandomFreeSpace = () => {
    const freeSpaces = [...boardPositions].filter(row => {
        return row.style.backgroundImage === ''})
    return freeSpaces[Math.floor(Math.random()*freeSpaces.length)]
}

