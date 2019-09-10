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


const getAllCards = () => {
    fetch(CARDS_URL)
    .then(resp => resp.json())
    .then(parseCards)
    .catch(error => alert(error.message))
}

const parseCards = cards => {
    addCard(cards[0])
}

const addCard = card => {
    // const cardDiv = document.createElement('div')
    // cardDiv.innerHTML = `<img src="${card.img}">`
    topCenter.style.backgroundImage = `url(${card.img})`
}

getAllCards()