'use strict'

const FAVORITE_NUMBER = 23;
let favNumber = $('.fav-number-facts').text(FAVORITE_NUMBER)

// Make a request to numbers API for facts about favorite number

async function GetNumberFacts(){

    let resp = await axios.get(`http://numbersapi.com/3,4,5,6`, {params: 'json'})
    console.log(resp);
    let numberFacts = $('.number-facts')
    for (let key in resp.data){
        numberFacts.append($(`<li>${resp.data[key]}</li>`))
    }
}


// async function GetFourFacts(){
//     let i = 0;
//     while (i < 4){
//         let resp = await axios.get(`http://numbersapi.com/${FAVORITE_NUMBER}`, {params: 'json'});
//         console.log(resp)
//         favNumber.append($(`<li>${resp.data}</li>`));
//         i++;
//     }
// }

async function GetFourFacts(){
    let resp = axios.get(`http://numbersapi.com/${FAVORITE_NUMBER}`, {params: 'json'});
    let resp2 = axios.get(`http://numbersapi.com/${FAVORITE_NUMBER}`, {params: 'json'});
    let resp3 = axios.get(`http://numbersapi.com/${FAVORITE_NUMBER}`, {params: 'json'});
    let resp4 = axios.get(`http://numbersapi.com/${FAVORITE_NUMBER}`, {params: 'json'});
        // console.log(await resp)
    let results = [await resp, await resp2, await resp3, await resp4]
    for (let result of results){
        favNumber.append($(`<li>${result['data']}</li>`));
    }
}

$("#fav-num-facts").on('click', GetFourFacts);
$("#num-facts").on('click', GetNumberFacts);


$(function() {

});