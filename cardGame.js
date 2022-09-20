/* 
Overview 

Create a JS file that uses classes to create an object representing a deck of cards. Then create a simple console version of the card game 'War'

Steps: 

1. Create a Deck class 

2. Create a method on the Deck class that dynamically generates each card object
example card object: {suit: "hearts", value: 2}

a card's value corresponds to the number/face card's rank

ace = 1
cards 2-10 = their number value 
jacks = 11 
queens = 12 
kings = 13 

3. card objects can be held inside an array 

4. create a method to select a random card object 

5. create a function that runs the random card method on each deck, and compares the values of the 2 random cards

6. console log both card objects, and a message declaring which one has the higher value

*/


class Deck {
    constructor(name){
        this.name = name
        this.suits = [
            "Spade", "Hearts", "Diamond", "Club"
        ]
    }
    selectRandom() {
        let card = {
            "suit": this.suits[Math.floor(Math.random() * (this.suits.length - 1))],
            "value": Math.floor(Math.random() * 13)
        }
        console.log(`Card generated. \nSuit: ${card.suit}\nValue: ${card.value}\n----------\n`)
        return card
    }
}

const compareCards = (card1, card2) => {
    if (card1.value == card2.value) console.log("The two cards have the same value")
    else card1.value > card2.value ? console.log(card1) : console.log(card2)
}

const test = new Deck("Test Deck") 
let cardA = test.selectRandom()
let cardB = test.selectRandom()

compareCards(cardA, cardB)