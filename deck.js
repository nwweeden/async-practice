'use strict'
const BASE_API_URL = "https://deckofcardsapi.com/api/deck/"

let counter = 0
let deckId = undefined

/**Make a get request on first click to Deck of cards API
 * fetch the deck_id.
 * Make a get request using the deck_id on further clicks to get single card
 * repeat until we are left with no cards
 */

async function getCard(){

    let suit
    let value
    if(counter === 0){
        let resp = await axios.get(`${BASE_API_URL}new/draw/?count=1`)

        suit = resp.data.cards[0].suit
        console.log("suit", suit)
        value = resp.data.cards[0].value
        deckId = resp.data.deck_id
        console.log("suit", value)
        counter = counter+1

        populateCards(suit, value)
    }
    else{
        try{
            let firstCardResp1 = await axios.get(`${BASE_API_URL}${deckId}/draw/?count=1`)

            value = firstCardResp1.data.cards[0].value
            suit = firstCardResp1.data.cards[0].suit

            populateCards(suit, value)
        }
        catch(err){
            $(".cards").append(`<div>No more cards</div>`)
        }
        
    }
}


function populateCards(suit, value){
    $(".cards").append(`<div>suit :${suit} and value : ${value}</div>`)
}


$("button").on("click", function(){
    let card = getCard()
    populateCards()
})