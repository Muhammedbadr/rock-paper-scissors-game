// Get form document
const btn = document.querySelector(".btn footer button");
const rulesList = document.querySelector(".rules-list");
const closeBtn = document.querySelector(".close-btn");
const RPS = document.querySelectorAll(".RPS");
const winOrLose = document.querySelector(".win-or-lose");
const gameBtn = document.querySelector(".game");
const playAgain = document.querySelector(".playagain");
const handOptionsRendom = document.getElementById("handOptionsRendom");
const scoreElement = document.getElementById("score");
let score = 0;

// Add Element
btn.addEventListener("click", showRules);

// Remove Element
closeBtn.addEventListener("click", closeRules);

// Add click event to RPS
RPS.forEach(element => {
    element.addEventListener("click", () => RockScissorsPaper(element.dataset.hand, element.dataset.borderColor, element.dataset.boxShadow));
});

// Reset
playAgain.addEventListener("click", playAgainTheGame);

// Keys
const handOptions = {
    "scissors": { src: "/images/icon-scissors.svg", borderColor: "#5671f5", boxShadow: "inset 0px 8px rgba(63,55,55,0.1), 0px 8px #0e34f1" },
    "paper": { src: "/images/icon-paper.svg", borderColor: "#e9a216", boxShadow: "inset 0px 8px rgba(63,55,55,0.1), 0px 8px #b27c10" },
    "rock": { src: "/images/icon-rock.svg", borderColor: "#dd405d", boxShadow: "inset 0px 8px rgba(63,55,55,0.1), 0px 8px #b21f3a" }
};

function showRules() {
    // Show rules
    rulesList.classList.remove("hidden");
}

function closeRules() {
    // Hide rules
    rulesList.classList.add("hidden");
}

function RockScissorsPaper(hand, borderColor, boxShadow) {
    // Display result
    console.log(hand);
    winOrLose.classList.remove("hidden");
    gameBtn.classList.add("hidden");
    const peckedImg = document.getElementById("peckedimg");
    peckedImg.src = handOptions[hand].src;
    peckedImg.parentElement.style.borderColor = borderColor;
    peckedImg.parentElement.style.boxShadow = boxShadow;
    let handsRandom = pickComputerHand();
    refeat(hand, handsRandom);
}

function pickComputerHand() {
    // Randomly pick computer's hand
    const hands = ["rock", "paper", "scissors"];
    const handsRandom = hands[Math.floor(Math.random() * hands.length)];
    const computerPick = document.getElementById("handOptionsRendom");
    const computerPickContainer = document.getElementById("computerPickContainer");
    computerPick.src = handOptions[handsRandom].src;
    computerPickContainer.style.borderColor = handOptions[handsRandom].borderColor;
    computerPickContainer.style.boxShadow = handOptions[handsRandom].boxShadow;
    return handsRandom;
}

const refeat = (userHand, computerHand) => {
    const cpLoge = document.querySelector(".cp-loge");
    const iWin = document.querySelector(".i-win");

    const winShadow = "inset 0px 8px rgba(63, 55, 55, 0.1), 0px 0px 0px 50px rgba(220, 220, 220, 0.075), 0px 0px 0px 100px rgba(220, 220, 220, 0.05), 0px 0px 0px 150px rgba(220, 220, 220, 0.025)";
    const loseShadow = "inset 0px 8px rgba(63, 55, 55, 0.1), 0px 0px 0px 50px rgba(220, 220, 220, 0.075), 0px 0px 0px 100px rgba(220, 220, 220, 0.05), 0px 0px 0px 150px rgba(220, 220, 220, 0.025)";

    if (userHand === "paper" && computerHand === "scissors" ||
        userHand === "rock" && computerHand === "paper" ||
        userHand === "scissors" && computerHand === "rock") {
        setDecision("YOU LOSE");
        cpLoge.style.boxShadow = loseShadow;
    } else if (userHand === "paper" && computerHand === "rock" ||
               userHand === "rock" && computerHand === "scissors" ||
               userHand === "scissors" && computerHand === "paper") {
        setDecision("YOU WIN");
        setScore(score + 1);
        iWin.style.boxShadow = winShadow;
    } else {
        setDecision("IT'S A TIE");
    }
}

const setDecision = (decision) => {
    const decisionElement = document.getElementById("decision");
    decisionElement.textContent = decision;
}

const setScore = (newScore) => {
    score = newScore;
    scoreElement.textContent = score;
}

function playAgainTheGame() {
    // Reset game
    winOrLose.classList.add("hidden");
    gameBtn.classList.remove("hidden");
}
