const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It-s a tie!";
    } else if (
        (playerChoice === "rock" && computer === "scissors") || // rock beats scissors
        (playerChoice === "paper" && computer === "rock") || // paper beats rock
        (playerChoice === "scissors" && computer === "paper") // scissors beats paper
    ) {
        result = "Congratulations. You win!";
    } else {
        result = "Sorry. You lost!";
    }

    document.getElementById("result").innerText = `Elegiste ${playerChoice}, la computadora eligió ${computer}. ${result}`;
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));


// Tom M / Ben Fowler / 0xabdulkhalid / Evelyn Li /  llfalcao