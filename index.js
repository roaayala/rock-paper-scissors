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

function playRound(computerChoice, humanChoice) {
	console.log(computerChoice);
	console.log(humanChoice);
	if (computerChoice === 'rock' && humanChoice === 'rock') {
		computerScore = computerScore;
		humanScore = humanScore;
		console.log(
			`Draw, you both choose rock. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
		);
	} else if (computerChoice === 'paper' && humanChoice === 'paper') {
		computerScore = computerScore;
		humanScore = humanScore;
		console.log(
			`Draw, you both choose paper. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
		);
	} else if (computerChoice === 'scissors' && humanChoice === 'scissors') {
		computerScore = computerScore;
		humanScore = humanScore;
		console.log(
			`Draw, you both choose scissors. Current score is ${computerScore} for Computer and ${humanScore} for Human.`
		);
	}
}

playRound(computerChoice, humanChoice);
