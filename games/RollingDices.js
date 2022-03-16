const rollButton = document.querySelector('.roll-btn')
const newNumberButton = document.querySelector('.new-lucky-number')
const dices = document.querySelectorAll('.dice')
const totalPoint = document.querySelector('.total-point')
const rollingDicesMessage = document.querySelector('.rollingDices-message')
const rollingDicesWinningMessage = document.querySelector('.rollingDices-winning-message')

const luckyNumber = document.querySelector('.lucky-number')

const clickCount = document.querySelector('.click-count')

let dices_face = [
    { att: "fas fa-dice-one", number: 1 },
    { att: "fas fa-dice-two", number: 2 },
    { att: "fas fa-dice-three", number: 3 },
    { att: "fas fa-dice-four", number: 4 },
    { att: "fas fa-dice-five", number: 5 },
    { att: "fas fa-dice-six", number: 6 }
]

let lucky_number = 0
let click_count = 0
let total_point = 0

function randomNum() { return Math.floor(Math.random() * 5) }

addDiceFace = (dice) => {
    let face = document.createElement('i')
    face.classList = "far fa-square"
    dice.append(face)
}

addDiceFace(dices[0])
addDiceFace(dices[1])
addDiceFace(dices[2])

lucky_number = Math.floor(Math.random() * (18 - 3 + 1) + 3)
luckyNumber.textContent = lucky_number
rollButton.addEventListener('click', () => {
    let num1 = randomNum()
    let num2 = randomNum()
    let num3 = randomNum()
    dices[0].childNodes[0].classList = `${dices_face[num1].att}`
    dices[1].childNodes[0].classList = `${dices_face[num2].att}`
    dices[2].childNodes[0].classList = `${dices_face[num3].att}`
    total_point = num1 + num2 + num3 + 3
    totalPoint.textContent = "Sum: " + total_point
    click_count++;
    clickCount.textContent = click_count
    if (total_point === lucky_number) {
        rollingDicesWinningMessage.textContent = `You've found the LUCKY NUMBER in ${click_count} clicks`
        rollButton.style.pointerEvents = 'none'
    }
})

newNumberButton.addEventListener('click', () => {
    rollButton.style.pointerEvents = 'all'
    lucky_number = Math.floor(Math.random() * (18 - 3 + 1) + 3)
    luckyNumber.textContent = lucky_number
    click_count = 0
    total_point = 0
    clickCount.textContent = ""
    totalPoint.textContent = "..."
    rollingDicesWinningMessage.textContent = ""
})
