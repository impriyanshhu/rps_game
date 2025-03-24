const display = document.querySelector('.display-result');
const youWin = document.querySelector('.youWin');
const youLose = document.querySelector('.youLose');
const youDraw = document.querySelector('.youDraw');
const reset = document.querySelector('.reset');

let winCount = 0;
let lossCount = 0;
let drawCount = 0;

const playgame = (yourChoice) => {
    const compChoice = compMove();

    if (
        (yourChoice === 'rock' && compChoice === 'scissors') ||
        (yourChoice === 'paper' && compChoice === 'rock') ||
        (yourChoice === 'scissors' && compChoice === 'paper')
    ) {
        display.innerHTML = "You win!";
        winCount += 1;
        youWin.innerHTML = winCount;
        display.style.color = 'green';
    } else if (yourChoice === compChoice) {
        display.innerHTML = "Draw!";
        drawCount += 1;
        youDraw.innerHTML = drawCount;
        display.style.color = 'orange';
    } else {
        display.innerHTML = "You lose!";
        lossCount += 1;
        youLose.innerHTML = lossCount;
        display.style.color = 'red';
    }

}

function compMove() {
    const randomChoice = Math.random();
    if (randomChoice <= 1 / 3) {
        return 'rock';
    } else if (randomChoice <= 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}



reset.addEventListener('click', () => {
    winCount = 0;
    lossCount = 0;
    drawCount = 0;

    display.innerHTML = "Choose your choice";
    display.style.color = 'white';

    youWin.innerHTML = winCount;
    youDraw.innerHTML = drawCount;
    youLose.innerHTML = lossCount;
})
