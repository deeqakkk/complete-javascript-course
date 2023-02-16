'use strict';

const checkBtn = document.querySelector('.check');
const correctNum = document.querySelector('.number');
const msgField = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const currScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const bgColor = document.querySelector('body');
let scoreValue = 20;

let randomNum = Math.floor(Math.random() * 20) + 1;
console.log(randomNum)
checkBtn.addEventListener('click', function() {
    const guessNum = Number(document.querySelector('.guess').value);
    if (scoreValue == 0) {
        msgField.textContent = "You lost the game!";
        bgColor.style.backgroundColor = 'red';
    } else if (!guessNum) {
        msgField.textContent = "No Number, Try again!!!";
    } else if (guessNum === randomNum) {
        highScore.textContent = scoreValue;
        msgField.textContent = "Correct Number!!!";
        bgColor.style.backgroundColor = 'green';
        correctNum.textContent = randomNum;
        correctNum.style.width = '30rem';
    } else if (guessNum < randomNum) {
        msgField.textContent = "Try again with a higher number!!!";
        scoreValue--;
        currScore.textContent = scoreValue;
    } else if (guessNum > randomNum) {
        msgField.textContent = "Try again with a lower number!!!";
        scoreValue--;
        currScore.textContent = scoreValue;
    }


});

againBtn.addEventListener('click', function() {
    const guessNum = document.querySelector('.guess');
    guessNum.value = "";
    correctNum.textContent = "?";
    msgField.textContent = "Start guessing...";
    randomNum = Math.floor(Math.random() * 20) + 1;
    currScore.textContent = 0;
    highScore.textContent = 20;
})