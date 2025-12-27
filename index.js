// choice
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

// score
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
	const randomChoice = Math.trunc(Math.random() * 3 + 1);
	switch (randomChoice) {
		case 1:
			return 'rock';
		case 2:
			return 'paper';
		case 3:
			return 'scissors';
	}
}

function getHumanChoice() {
	const randomChoice = prompt(
		'Choose between Rock, Paper or Scissors'
	).toLocaleLowerCase();
	return randomChoice;
}

function newChoices() {
	computerChoice = getComputerChoice();
	humanChoice = getHumanChoice();
}

function resetScores(computerScore, humanScore) {
	computerScore = 0;
	humanScore = 0;
}

function playGame() {
	while (computerScore < 5 && humanScore < 5) {
		playRound(computerChoice, humanChoice);
	}

	if (computerScore === 5) {
		console.log('Computer won.');
		return;
	} else {
		console.log('Human won.');
		return;
	}

	function playRound(computerChoice, humanChoice) {
		// both rock
		if (computerChoice === 'rock' && humanChoice === 'rock') {
			computerScore = computerScore;
			humanScore = humanScore;
			console.log(
				`Draw, you both choose rock. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// both paper
		else if (computerChoice === 'paper' && humanChoice === 'paper') {
			computerScore = computerScore;
			humanScore = humanScore;
			console.log(
				`Draw, you both choose paper. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// both scissors
		else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
			computerScore = computerScore;
			humanScore = humanScore;
			console.log(
				`Draw, you both choose scissors. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// r vs s
		else if (computerChoice === 'rock' && humanChoice === 'scissors') {
			computerScore++;
			humanScore = humanScore;
			console.log(
				`Rock beat scissors, Computer won. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// p vs r
		else if (computerChoice === 'paper' && humanChoice === 'rock') {
			computerScore++;
			humanScore = humanScore;
			console.log(
				`Paper beat rock, Computer won. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// s vs p
		else if (computerChoice === 'scissors' && humanChoice === 'paper') {
			computerScore++;
			humanScore = humanScore;
			console.log(
				`Scissors beat paper, Computer won. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// s vs r
		else if (computerChoice === 'scissors' && humanChoice === 'rock') {
			computerScore = computerScore;
			humanScore++;
			console.log(
				`Scissors beat rock, Human won. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// r vs p
		else if (computerChoice === 'rock' && humanChoice === 'paper') {
			computerScore = computerScore;
			humanScore++;
			console.log(
				`Rock beat paper, Human won. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
		// p vs s
		else if (computerChoice === 'paper' && humanChoice === 'scissors') {
			computerScore = computerScore;
			humanScore++;
			console.log(
				`Paper beat scissors, Human won. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
			);
			newChoices();
		}
	}
}

playGame();
