const CARDS_URL = 'http://localhost:3000/cards'

const topLeft = document.getElementById('top-left')
const topCenter = document.getElementById('top-center')
const topRight = document.getElementById('top-right')
const middleLeft = document.getElementById('middle-left')
const middleCenter = document.getElementById('middle-center')
const middleRight = document.getElementById('middle-right')
const bottomLeft = document.getElementById('bottom-left')
const bottomCenter = document.getElementById('bottom-center')
const bottomRight = document.getElementById('bottom-right')

let playerCards = []

const getAllCards = () => {
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(assignUserCards)
    .catch(error => alert(error.message))
}

const assignUserCards = cards => {
    for (let i = 0; i<5; i++ ) {
    playerCards.push(cards[Math.floor(Math.random()*cards.length)])
    }
    debugger
}

const addCard = card => {
    topLeft.style.backgroundImage = `url(${card.img})`
    topLeft.style.backgroundSize = 'cover'
    topLeft.style.opacity = '.6'
}

topRight.addEventListener('click', event => {
    debugger
})

window.addEventListener('load', getAllCards)



