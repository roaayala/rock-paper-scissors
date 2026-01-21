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
			return 'rock';
		case 2:
			return 'paper';
		case 3:
			return 'scissors';
	}
}

function draw(hScore, cScore) {
	hScore = hScore;
	cScore = cScore;
	updateScore(humanScoreBoard, computerScoreBoard);
}

function humanWin(hScore, cScore) {
	hScore++;
	cScore = cScore;
	updateScore(humanScoreBoard, computerScoreBoard);
}

function computerWin(hScore, cScore) {
	hScore = hScore;
	cScore++;
	updateScore(humanScoreBoard, computerScoreBoard);
}

function playRound(humanChoice, computerChoice) {
	// both rock
	if (humanChoice === 'ROCK' && computerChoice === 'ROCK') {
		draw(humanScore, computerScore);
	}

	// both paper
	if (humanChoice === 'PAPER' && computerChoice === 'PAPER') {
		draw(humanScore, computerScore);
	}

	// both scissors
	if (humanChoice === 'scissors' && computerChoice === 'scissors') {
		draw(humanScore, computerScore);
	}

	// r vs s
	if (humanChoice === 'rock' && computerChoice === 'scissors') {
		humanWin(humanScore, computerScore);
	}

	// p vs r
	if (humanChoice === 'paper' && computerChoice === 'rock') {
		humanWin(humanScore, computerScore);
	}

	// s vs p
	if (humanChoice === 'scissors' && computerChoice === 'paper') {
		humanWin(humanScore, computerScore);
	}

	// s vs r
	if (humanChoice === 'scissors' && computerChoice === 'rock') {
		computerWin(humanScore, computerScore);
	}

	// r vs p
	if (humanChoice === 'rock' && computerChoice === 'paper') {
		computerWin(humanScore, computerScore);
	}

	// p vs s
	if (humanChoice === 'paper' && computerChoice === 'scissors') {
		computerWin(humanScore, computerScore);
	}
}

function updateScore(hScore, cScore) {
	hScore.textContent = humanScore;
	cScore.textContent = computerScore;
}

const humanChoices = [rock, paper, scissors];
humanChoices.forEach((choice) => {
	choice.addEventListener('click', () => {
		const humanChoice = choice.textContent.toUpperCase();
		humanChoiceBoard.textContent = humanChoice;

		const computerChoice = getComputerChoice().toUpperCase();
		computerChoiceBoard.textContent = computerChoice;

		playRound(humanChoice, computerChoice);
		console.log(humanScore);
		console.log(computerScore);
	});
});
