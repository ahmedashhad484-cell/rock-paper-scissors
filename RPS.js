let options = ["Rock", "Paper", "Scissors"];
function getRandomOption(){
    return options[Math.floor(Math.random()*options.length)];
}
function getResult(userOption){
    globalThis.computerChoice=getRandomOption();
    if(userOption==="Rock" && computerChoice==="Scissors"){
        return true;
    }else if(userOption==="Paper" && computerChoice==="Rock"){
        return true;
    }else if(userOption==="Scissors" && computerChoice==="Paper"){
        return true;
    }else{
        return false;
    }
}
function getRoundMessage(userOption){
    if(getResult(userOption)){
        playerScore+=1;
        updatePlayerScore();
        checkForWinner();
        return `You won the round, Your choice ${userOption}, Computer's choice ${computerChoice}`
    }else if(userOption===computerChoice){
        return `It was a tie, Your choice ${userOption}, Computer's choice ${computerChoice}`
    }else{
        computerScore+=1;
        updateComputerScore();
        checkForWinner();
        return `You lost the round, Your choice ${userOption}, Computer's choice ${computerChoice}`
    }
}
function updatePlayerScore(){
    playerScoreMsg.textContent = `Player Score: ${playerScore}`;
}
function updateComputerScore(){
    computerScoreMsg.textContent = `Computer Score: ${computerScore}`;
}
function resetScore(){
    playerScore=0;
    computerScore=0;
    playerScoreMsg.textContent = "Player Score: 0";
    computerScoreMsg.textContent = "Computer Score: 0";
}
let playerScore = 0;
let computerScore = 0;
const rulesButton = document.getElementById("rules-button");
const rulesList = document.getElementById("rules-list");
const computerScoreMsg = document.getElementById("computer-score");
const playerScoreMsg = document.getElementById("player-score");
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");
const resultMessage = document.getElementById("result-message");
const resetBtn = document.getElementById("reset-btn");
const resultMessage1 = document.getElementById("result-message1")
rockBtn.addEventListener("click", ()=>{
    resultMessage.textContent = getRoundMessage("Rock");
})
paperBtn.addEventListener("click", ()=>{
    resultMessage.textContent = getRoundMessage("Paper");
})
scissorBtn.addEventListener("click", ()=>{
    resultMessage.textContent = getRoundMessage("Scissors");
})
resetBtn.addEventListener("click", ()=>{
    resultMessage.textContent = ""
    rockBtn.style.display = "inline";
    paperBtn.style.display = "inline";
    scissorBtn.style.display = "inline";
    resultMessage1.textContent = "";
    resetScore();
})
function checkForWinner(){
    const winningScore = 5;
    if(playerScore===winningScore){
        resultMessage1.textContent = "You won the game, click below to play again.";
        resultMessage1.style.color = "green";
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorBtn.style.display = "none";
        return;
    }else if(computerScore===winningScore){
        resultMessage1.textContent = "You lost the game, click below to play again.";
        resultMessage1.style.color = "red";
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorBtn.style.display = "none";
        return;
    }
}
rulesButton.addEventListener("click", () => {
    if (rulesList.style.display === "none" || rulesList.style.display === "") {
        rulesList.style.display = "block";
        rulesList.animate([
            { opacity: "0" },
            { opacity: "0.5" },
            { opacity: "1" }
        ], {
            duration: 300,
            easing: "ease-in-out"
        });
    } else {
        rulesList.animate([
            { opacity: "1" },
            { opacity: "0.5" },
            { opacity: "0" }
        ], {
            duration: 300,
            easing: "ease-in-out"
        });
        setTimeout(() => hideElement(rulesList), 290);
    }
});

function hideElement(element) {
    element.style.display = "none";
}