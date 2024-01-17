let result = "";
let computerChoice = "";
let playerChoice = "";

function getComputerChoice() {
    switch (+(Math.random()*3).toFixed(0)) {
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    }
    return computerChoice;
}

function playGame(playerChoice, computerChoice) {

    if (playerChoice == computerChoice) {
        result = "tie";
        return "It's a tie! You picked " + playerChoice + " and the computer picked " + computerChoice + ". Adding a new round!"; 
    }

    else if (playerChoice == "rock" && computerChoice == "scissors") {
        result = "win";
        return "You win! You picked rock and the computer picked scissors.";
    }

    else if (playerChoice == "paper" && computerChoice == "rock") {
        result = "win";
        return "You win! You picked paper and the computer picked rock.";
    }

    else if (playerChoice == "scissors" && computerChoice == "paper") {
        result = "win";
        return "You win! You picked scissors and the computer picked paper.";
    }

    else if (playerChoice == "rock" && computerChoice == "paper") {
        result = "lose";
        return "You lose! You picked rock and the computer picked paper.";
    }
    
    else if (playerChoice == "paper" && computerChoice == "scissors") {
        result = "lose";
        return "You lose! You picked paper and the computer picked scissors.";
    }
    
    else if (playerChoice == "scissors" && computerChoice == "rock") {
        result = "lose";
        return "You lose! You picked scissors and the computer picked rock.";
    }
    
    else {
        result = "?"
        return "Hmmm ... I don't know what you picked. Adding a new round!"
    }

    
}

function game() {
    for(let i = 0; i < 5; i++) {

        playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
        if (!/^[a-zA-Z]+$/.test(playerChoice)) {
            return "Please ender a valid choice";
        }
        computerChoice = getComputerChoice();
        
        console.log(playGame(playerChoice, computerChoice));
        if (result == "tie" || result == "?") {
            i--;

        }
    }

    
}

