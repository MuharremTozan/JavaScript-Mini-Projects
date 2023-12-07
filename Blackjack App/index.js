let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
let card

let player = {
    name: "player",
    chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1 
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    return randomCard
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    }
    else{
        message = "You're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = 'Sum: ' + sum
    cardsEl.textContent = 'Cards: '

    for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
        cardsEl.textContent += cards[cardIndex] + "  "
    
    }
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){
        card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    }





/* 
let randomNumber = Math.floor(Math.random() * 6) + 1
Math floor sayının devamını törpülüyor. Bu değişen bir zar değişkeni oldu aslında.  
 
 */