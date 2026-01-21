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
	if (humanChoice === computerChoice) {
		draw();
	}

	// r vs s
	if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS') {
		humanWin();
	}

	// p vs r
	if (humanChoice === 'PAPER' && computerChoice === 'ROCK') {
		humanWin();
	}

	// s vs p
	if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER') {
		humanWin();
	}

	// s vs r
	if (humanChoice === 'SCISSORS' && computerChoice === 'ROCK') {
		computerWin();
	}

	// r vs p
	if (humanChoice === 'ROCK' && computerChoice === 'PAPER') {
		computerWin();
	}

	// p vs s
	if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS') {
		computerWin();
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
		const humanChoice = choice.textContent.toUpperCase();
		const computerChoice = getComputerChoice();

		humanChoiceBoard.textContent = humanChoice;
		computerChoiceBoard.textContent = computerChoice;

		playRound(humanChoice, computerChoice);
	});
});

resetButton.addEventListener('click', reset);
