
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")];



function handSelect() {

    game.playerHand = this.dataset.option
    console.log(game.playerHand);
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 3px 3px green';
}

function aiChoise(){
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai){

    if(player === ai) {
        return "draw"
    } else if((player === "paper" && ai === "stone") || 
    (player === "stone" && ai === "scissors") ||
    (player === "scissors" && ai === "paper")) {
        return "win"
    } else {
        return "loss"
    }
}


function startGame() {
if(!game.playerHand) {
    return alert("Choose a hand!");
}
game.aiHand = aiChoise();
const gameResult = checkResult(game.playerHand, game.aiHand);

}



hands.forEach(hand => hand.addEventListener('click',
 handSelect));

document.querySelector(".start").addEventListener('click',
startGame);