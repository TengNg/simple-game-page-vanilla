const gameBoard = document.querySelector('.memoryCards.container')
const playerLives = document.querySelector('.player-lives-count')
const memoryCardsWinningMessage = document.querySelector('.memoryCards-winning-message')
var lives = 30
playerLives.textContent = lives

const getData = () => [
    { className: "fas fa-cat", name: "cat" },
    { className: "fas fa-dog", name: "dog" },
    { className: "fas fa-dove", name: "dove" },
    { className: "fas fa-dragon", name: "dragon" },
    { className: "fas fa-fish", name: "fish" },
    { className: "fas fa-frog", name: "frog" },
    { className: "fas fa-horse", name: "horse" },
    { className: "fas fa-paw", name: "paw" },
    { className: "fas fa-cat", name: "cat" },
    { className: "fas fa-dog", name: "dog" },
    { className: "fas fa-dove", name: "dove" },
    { className: "fas fa-dragon", name: "dragon" },
    { className: "fas fa-fish", name: "fish" },
    { className: "fas fa-frog", name: "frog" },
    { className: "fas fa-horse", name: "horse" },
    { className: "fas fa-paw", name: "paw" }
]

const shuffleCards = () => {
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5)
    return cardData
}

const cardGenerator = () => {
    const cardData = shuffleCards()
    cardData.forEach(item => {
        const card = document.createElement('div')
        const front = document.createElement('div')
        const back = document.createElement('div')

        const front_face = document.createElement('i')
        const back_face = document.createElement('i')

        card.classList = 'card'
        back.classList = 'back'
        front.classList = 'front'

        back_face.classList = `fas fa-square-full`
        front_face.classList = `${item.className}`

        front.append(front_face)
        back.append(back_face)

        card.setAttribute('name', item.name)

        gameBoard.append(card)
        card.append(front)
        card.append(back)

        card.addEventListener('click', (e) => {
            card.childNodes[1].classList.add('hideCard')
            checkCard(e)
        })
    })
}

cardGenerator()

const checkCard = (e) => {
    const clickedCard = e.currentTarget
    clickedCard.classList.add('flipped')
    let hiddenBackFaceCards = document.querySelectorAll('.hideCard')
    let flippedCard = document.querySelectorAll('.flipped')
    if (flippedCard.length === 2) {
        if (flippedCard[0].getAttribute('name') === flippedCard[1].getAttribute('name')) {
            flippedCard.forEach(item => {
                item.classList.remove('flipped')
                item.style.pointerEvents = 'none'
            })
        } else {
            flippedCard.forEach(item => {
                item.classList.remove('flipped')
                setTimeout(() => item.childNodes[1].classList.remove('hideCard'), 400)
            })
            lives--
            setTimeout(() => playerLives.textContent = lives, 400)
            if (lives === 0) {
                memoryCardsWinningMessage.textContent = 'YOU LOSE'
                setTimeout(() => restart(), 500)
            }
        }
    }
    if (hiddenBackFaceCards.length === 16) {
        memoryCardsWinningMessage.textContent = 'YOU WIN'
        memoryCardsWinningMessage.style.color = 'darkred'
        setTimeout(() => restart(), 500)
    }
}

const restart = () => {
    let cardData = shuffleCards()
    let faces = document.querySelectorAll('.front')
    let cards = document.querySelectorAll('.card')

    cardData.forEach((item, index) => {
        setTimeout(() => {
            cards[index].childNodes[1].classList.remove('hideCard')
            memoryCardsWinningMessage.textContent = ''
            cards[index].style.pointerEvents = 'all'
            cards[index].setAttribute('name', item.name)
            cards[index].childNodes[0].childNodes[0].setAttribute('class', item.className)
            faces[index].src = item.imgSrc
        }, 1200)
    })

    lives = 30
    playerLives.textContent = lives
}

