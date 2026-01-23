// SCORE
let humanScore = 0;
let computerScore = 0;

// scoreboard
const humanScoreBoard = document.querySelector('#human-score');
humanScoreBoard.textContent = humanScore;
const computerScoreBoard = document.querySelector('#computer-score');
computerScoreBoard.textContent = computerScore;

// round choices
const humanChoiceBoard = document.querySelector('#human-choice');
const computerChoiceBoard = document.querySelector('#computer-choice');

// choices button
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// reset button
const resetButton = document.querySelector('#btn-reset');

function getComputerChoice() {
	const randomChoice = Math.trunc(Math.random() * 3 + 1);
	switch (randomChoice) {
		case 1:
			return 'ROCK';
		case 2:
			return 'PAPER';
		case 3:
			return 'SCISSORS';
	}
}

function draw() {
	updateScore();
}

function humanWin() {
	humanScore++;
	updateScore();
}

function computerWin() {
	computerScore++;
	updateScore();
}

function playRound(humanChoice, computerChoice) {
	// DRAW
	if (humanChoice === computerChoice) {
		draw();
		return;
	}

	// ROCK
	if (humanChoice === 'ROCK') {
		if (computerChoice === 'SCISSORS') humanWin();
		else computerWin();
	}

	// PAPER
	if (humanChoice === 'PAPER') {
		if (computerChoice === 'ROCK') humanWin();
		else computerWin();
	}

	// SCISSORS
	if (humanChoice === 'SCISSORS') {
		if (computerChoice === 'PAPER') humanWin();
		else computerWin();
	}
}

function updateScore() {
	humanScoreBoard.textContent = humanScore;
	computerScoreBoard.textContent = computerScore;
}

function reset() {
	humanScore = 0;
	computerScore = 0;
	humanScoreBoard.textContent = humanScore;
	computerScoreBoard.textContent = computerScore;

	humanChoiceBoard.textContent = '-';
	computerChoiceBoard.textContent = '-';
}

const humanChoices = [rock, paper, scissors];
humanChoices.forEach((choice) => {
	choice.addEventListener('click', () => {
		if (humanScore === 5) {
			console.log(`Human win!`);
		} else if (computerScore === 5) {
			console.log(`Computer win!`);
		} else {
			const humanChoice = choice.textContent.toUpperCase();
			const computerChoice = getComputerChoice();

			humanChoiceBoard.textContent = humanChoice;
			computerChoiceBoard.textContent = computerChoice;
			playRound(humanChoice, computerChoice);
		}
	});
});

resetButton.addEventListener('click', reset);
