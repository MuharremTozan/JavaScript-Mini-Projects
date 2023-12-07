// document.getElementById("count-el").innerText = 5

// let myAge = 20

// console.log(myAge)

// let myAge = 20
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50

// bonusPoints += 50
// bonusPoints -= 75
// bonusPoints += 45
// console.log(bonusPoints)

let count = 0;



let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    console.log(count)
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.innerText = 0
    count = 0
}
