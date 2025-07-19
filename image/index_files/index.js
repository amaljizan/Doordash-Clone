// document.getElementById("count").innerText = 5

// let count = 5
// count =count + 1
// console.log(count)

// Create a variable,bonuspoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonuspoints = 50
// console.log(bonuspoints)?

// bonuspoints = bonuspoints + 50
//console.log(bonuspoints)

// bonuspoints = bonuspoints - 75
// console.log(bonuspoints)

// bonuspoints = bonuspoints + 45
// console.log(bonuspoints)


// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0;

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     console.log(count)
// let countEl =document.getElementById("count-el")
// let count = 0
// let saveEl =  document.getElementById("save-el")
// function increment(){
//     count = count + 1
//     countEl.textContent = count
// console.log(count)
// }
// function save(){
//     saveEl.innerText += count + "."

//     console.log(saveEl)
// }
// let errorparagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
//     errorparagraph.textContent = "Something went wrong,please try again"
// }


// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl =document.getElementById("sum-el")
// function add() {
//     let result = num1 + num2
//     sumEl.textContent = "Sum: " + result
// }
// function subtract() {
//     let result = num1 - num2
//     sumEl.textContent = "Sum: " + result
// }
// function divide() {
//     let result = num1 / num2
//     sumEl.textContent = "Sum: " + result
// }
// function multiply() {
//     let result = num1 * num2
//     sumEl.textContent = "Sum: " + result
// }

// let firstCard =  getRandomCard()
// let secondCard = getRandomCard()
// let cards = [firstCard,secondCard]
// let sum = firstCard + secondCard 
// let hasBlackjack = false
// let isAlive = true
// let message = ""
// let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
// let cardsEl = document.getElementById("cards-el")

// function getRandomCard() {
//     return Math.floor( Math.random()*13 ) + 1 // 1-13)
// }
// function startGame() {
//     renderGame()
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " "
//     }
//     sumEl.textContent = "Sum: " + sum
//     if (sum <= 20) {
//         message = "Do you want to draw a new card? "
//     }else if (sum === 21) {
//         message = "you've got Blackjack!"
//         hasBlackjack = true
//     }else {
//         message = "you're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }

// function newCard() {
//     let card = getRandomCard
//     sum += card 
//     cards.push(card)
//     console.log(cards)
//     renderGame()
// }

// let cards = [7,3,9]

// for (let i = 0; i < cards.length; i++) {}
// let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; , sentence .length; i++) {
//     greetingEl.textContent += sentence[i] + " "
// }
// let randomNumber = Math.random()  * 6

// function rollDice() {
//     let randomNumber = Math.floor( Math.random() * 6) + 1
//     console.log(randomNumber)
// }
// console.log( rollDice() )

// let cards = []
// let sum = 0
// let hasBlackjack = false
// let isAlive = false
// let message = ""
// let fruit = ["🍎,"🍊","🍎","🍎","🍊"]

// function saveLead() {
//     console.log("button clicked!")
// }

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click", function() {
//     console.log("button cliked from addEventListener")
// })  
// let myLeads = ["www.awesomelead.com", "www.epiclead.com","www.greatlead.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")

// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLead()

// })
    // console.log(myLeads)
// for (let i = 0; i < myLeads.length; i++) {
//     // ulEl.innerHTML += <li> + myLeads[i] + </li>
//     const li = document.createElement("li")
//     li.textContent = myLeads[i]


// }
 
// const container = document.getElementById("container")

// container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// function buy(){
//     container.innerHTML += "<p>Thank you for buying!</p>"
// }

// const recipient = "james"
// const sender = "Per Harald Borgen"
// const email = `Hey ${recipient}! how is it going? cheers ${sender}`

// console.log(email)
                    

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
console.log(leadsFromLocalStorage)


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
inputBtn.addEventListener("click", function() {
    // console.log("butotn pressed")
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLead", JSON.stringify(myLeads))
    renderLeads()
  
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
               <a target='_blank' href='${myLeads[i]}'>
                   ${myLeads[i]}
               <a/>
             </li> 
        `
    }
    ulEl.innerHTML=listItems
}

for(let i = 0 ;i>= 10;i++){
    console.log(i)
}