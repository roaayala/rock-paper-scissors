// choice
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

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

function playGame() {
	// score
	let computerScore = 0;
	let humanScore = 0;

	function playRound(computerChoice, humanChoice) {
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
		} else {
			console.log(computerChoice);
			console.log(humanChoice);
		}
	}

	if (computerScore === 5) {
		console.log('Computer Won');
	} else if (humanScore === 5) {
		console.log('Human Won');
	} else {
		playRound(computerChoice, humanChoice);
	}
}

playGame();
