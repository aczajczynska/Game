
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
    this.style.boxShadow = '0 0 3px 3px rgb(208, 117, 106)';
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
 
function publishResult(player, ai, result){
    document.querySelector('[data-summary="your-choice"]')
    .textContent = player;

    document.querySelector('[data-summary="ai-choice"]')
    .textContent = ai;

    document.querySelector('p.numbers span')
    .textContent = ++gameSummary.numbers;

    if(result === "win") {
    document.querySelector('p.wins span')
    .textContent = ++gameSummary.wins;

    document.querySelector('[data-summary="who-win"]')
    .textContent = "Gratulations, You won!";

    document.querySelector('[data-summary="who-win"]').style.color="green";
    } else if (result === "loss") {
        document.querySelector('p.losses span')
    .textContent = ++gameSummary.losses;

    document.querySelector('[data-summary="who-win"]')
    .textContent = "Try again!";

    document.querySelector('[data-summary="who-win"]').style.color="red";
    } else {
     document.querySelector('p.draws span')
    .textContent = ++gameSummary.draws;

    document.querySelector('[data-summary="who-win"]')
    .textContent = "Remis.";

    document.querySelector('[data-summary="who-win"]').style.color="royalblue";
    }
}

function resetData(){
document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = "";
game.playerHand = "";
game.aiHand = "";
}


function startGame() {
if(!game.playerHand) {
    return alert("Choose a hand!");
}
game.aiHand = aiChoise();
const gameResult = checkResult(game.playerHand, game.aiHand);
publishResult(game.playerHand, game.aiHand, gameResult);
resetData();
}


hands.forEach(hand => hand.addEventListener('click',
 handSelect));

document.querySelector(".start").addEventListener('click',
startGame);