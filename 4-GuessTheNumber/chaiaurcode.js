const submit = document.getElementById('subt'),
  guessInput = document.getElementById('guessField'),
  previousGes = document.querySelector('.guesses'),
  romaing = document.querySelector('.lastResult'),
  lowOrHi = document.querySelector('.lowOrHi'),
  newGame = document.querySelector('.resultParas');

submit.addEventListener('click', function (e) {
  const randomNum = Math.floor(Math.random() * 100 + 1);
  let guessNum = '';
  console.log(randomNum);
  e.preventDefault();
  let inputNum = parseInt(guessInput.value);

  if (inputNum === '' || inputNum < 0 || inputNum > 100 || isNaN(inputNum)) {
    alert('Plese enter Number between 1 to 100.');
  } else {
    let guess = [];
    guess.push(inputNum);
    previousGes.innerHTML += `${guess},  `;
    if (randomNum === guess) {
      lowOrHi.innerHTML = 'Well done! you guess the number.🙌';
    } else if (randomNum < guess) {
      lowOrHi.innerHTML = 'Guess number too high.';
    } else if (randomNum > guess) {
      lowOrHi.innerHTML = 'Guess number too low.';
    }
    const endrom = (romaing.innerHTML -= 1);
    if (endrom === 0) {
      newGame.innerHTML = `<button>New Game</button>`;
    }
  }
});
