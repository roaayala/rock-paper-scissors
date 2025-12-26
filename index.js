// choice
let computerChoice = getComputerChoice();
console.log(computerChoice);
let humanChoice = getHumanChoice();
console.log(humanChoice);

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
	let randomChoice = prompt(
		'Choose between Rock, Paper or Scissors'
	).toLocaleLowerCase();

	return randomChoice;
}

function playRound(computerChoice, humanChoice) {}
