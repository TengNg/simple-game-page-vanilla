const yourCards = document.querySelector('.your-cards')

const yourScore = document.querySelector('.your-score')
const cuScore = document.querySelector('.cu-score')

const newCardButton = document.querySelector('.newCard')
const drawCardButton = document.querySelector('.drawCard')
const stayButton = document.querySelector('.stay')

const blackjack_winningMessage = document.querySelector('.blackjack-winning-message')

randomCard = () => {
    let card = Math.floor(Math.random() * 13) + 1
    if (card == 1) return 11
    else if (card > 10) return 10
    return card
}

let cards = []
let total_score = 0
let cu_score = 0
let message = "..."

let gameStarted = false

renderGame = () => {
    yourCards.textContent = ""
    for (let i = 0; i < cards.length; i++)
        yourCards.innerHTML += cards[i] + "&nbsp;"
    yourScore.textContent = total_score
}

drawCardButton.style.cursor = 'not-allowed'
stayButton.style.cursor = 'not-allowed'

newCardButton.addEventListener('click', () => {
    gameStarted = true
    drawCardButton.addEventListener('click', drawCard)
    drawCardButton.style.cursor = 'pointer'
    let firstCard = randomCard()
    let secondCard = randomCard()
    cu_score = Math.floor(Math.random() * (21 - 16 + 1)) + 16
    cards = [firstCard, secondCard]
    total_score = firstCard + secondCard
    if(isEnoughPointToStay(total_score)) {
        stayButton.addEventListener('click', showCard)
        stayButton.style.cursor = 'pointer'
    }
    blackjack_winningMessage.textContent = message
    cuScore.textContent = "..."
    renderGame()
})

isEnoughPointToStay = (point) => point >= 16

drawCard = () => {
    if (total_score < 21 && cards.length <= 5 && gameStarted == true) {
        let new_card = randomCard()
        cards.push(new_card)
        total_score += new_card
        renderGame()
    }
    if(isEnoughPointToStay(total_score)) {
        stayButton.addEventListener('click', showCard)
        stayButton.style.cursor = 'pointer'
    }
}

showCard = () => {
    cuScore.textContent = cu_score
    if (total_score > 21 && cu_score > 21)
        message = 'Draw'
    else if (total_score > 21 && cu_score <= 21)
        message = 'You lose'
    else
        message = 'You win'

    if (total_score <= 21 && cu_score <= 21) {
        if (total_score > cu_score)
            message = 'You win'
        else if (total_score == cu_score)
            message = 'Draw'
        else
            message = 'You lose'
    }
    blackjack_winningMessage.textContent = message
    newCardButton.style.pointerEvents = 'none'
    drawCardButton.removeEventListener('click', drawCard)
    stayButton.removeEventListener('click', showCard)
    newCardButton.style.color = 'pink'
    newCardButton.style.borderColor = 'pink'
    setTimeout(() => {
        newCardButton.style.pointerEvents = 'all'
        newCardButton.style.color = 'white'
        newCardButton.style.borderColor = 'white'
        message = "..."
        yourScore.textContent = message
        cuScore.textContent = message
        yourCards.textContent = message
        blackjack_winningMessage.textContent = message
        cards = []
    }, 1500)
    gameStarted = false
}
