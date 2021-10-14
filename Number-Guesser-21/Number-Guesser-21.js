// init input module
// returns a string always
let prompt = require("prompt-sync")();

// // 1-10
// const numberGen = Math.floor(Math.random() * 10) + 1;
// let guessAmount = 0;
// let guess = -1

// while (guess !== numberGen) {
//   guessAmount++;
//   console.log(`answer is: ${numberGen}`);
//   guess = Number(prompt("Guess a number: ")); // input catcher and asker
//   if (guess === 0) break;
// }

// console.log(`you guessed it `);



const hello = () => {

  let myName = prompt('Enter your name: ');


  return `Hello, ${myName}, how are you today?`
}


console.log(hello());