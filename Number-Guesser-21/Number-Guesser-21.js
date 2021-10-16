let prompt = require("prompt-sync")(); // init input module: **returns a string always**

const guessingGame = () => {
  const numberGen = Math.floor(Math.random() * 101) + 1;
  let guessAmount = 0;
  let guess = -1

  while (guess !== numberGen) {
    guessAmount++;
    guess = Number(prompt(
      "Guess a number between 1 -100 (0: exit): ")); // input catcher and asker
    if (guess === 0) return 'game over';
    else if (guess < numberGen) console.log('Too low!');
    else if (guess > numberGen) console.log('Too high!');
  }
  return `YOU GUESSED RIGHT ! It took you ${guessAmount} attempts.`;
}


console.log(guessingGame());

/*
# checklist:
-[x] the prompt reaches outside of the function, so no param necessary
*/