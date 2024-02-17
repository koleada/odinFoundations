let result = "";
let computerChoice = "";

let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  switch (+(Math.random() * 3).toFixed(0)) {
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

//return a nodeList of all buttons
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", e => {
    let scoreText = document.querySelector("#scoreText");

    if (computerScore != 5 && playerScore != 5) {
      playerChoice = button.id;
      computerChoice = getComputerChoice();

      result = playGame(playerChoice, computerChoice);

      console.log("You " + result + ", the computer chose " + computerChoice);

      if (result == "Win") {
        playerScore++;
      } else if (result == "Lose") {
        computerScore++;
      } else {
        console.log("It was a tie!");
      }

      scoreText.innerHTML =
        "User: " + playerScore + " Computer: " + computerScore;
    }
    if (computerScore == 5 && playerScore < 5) {
      alert(
        "Computer Wins! This computer chose " +
          computerChoice +
          ". Resetting..."
      );
      computerScore = 0;
      playerScore = 0;
      scoreText.innerHTML =
        "User: " + playerScore + " Computer: " + computerScore;
    }
    if (playerScore == 5 && computerScore < 5) {
      alert(
        "You Win! This computer chose " + computerChoice + ". Resetting..."
      );
      computerScore = 0;
      playerScore = 0;
      scoreText.innerHTML =
        "User: " + playerScore + " Computer: " + computerScore;
    }
  });
});

function playGame(playerChoice, computerChoice, playerScore, computerScore) {
  if (playerChoice == computerChoice) {
    return "Tied";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    return "Win";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return "Win";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return "Win";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "Lose";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return "Lose";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return "Lose";
  } else {
    return "?";
  }
}
