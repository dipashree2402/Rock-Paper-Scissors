let userSore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");


const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#31081F";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userSore++;
        userScorePara.innerText = userSore;
        console.log("You win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        msg.innerText = `You lose. ${compChoice} beats  Your ${userChoice}`;
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.style.backgroundColor = "rgb(86, 0, 0)";
    }
};

const playGame = (userChoice) => {
    console.log("user choice is =", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice is =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});

