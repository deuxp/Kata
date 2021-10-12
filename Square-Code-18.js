const squareCode = function (message) {
  message = message.split('');
  message = message.filter(character => character !== ' ');
  message = message.join('');
  let square = [];
  let cryptedSquare = [];
  const columnLength = Math.ceil(Math.sqrt(message.length))
  let squareTEMP = [];

  // console.log(message);
  while (message.length > 1) {
    let a = message.substring(0, columnLength);
    let b = message.substring(columnLength);
    square.push(a);
    message = b
    // console.log(b);
  };

  // console.log(square);
  // console.log(square[0][0]);
  // console.log(message[0][0]);
  for (let x = 0; x < columnLength; x++) {
    for (let y = 0; y < square.length; y++) {
      console.log(square[y][x]);
    }
    console.log(' ');
  }

  // return squareTEMP
};

console.log(squareCode("chill out"));  // clu hlt io  
// console.log(squareCode("feed the dog"));  // fto ehg ee dd
// console.log(squareCode("have a nice day"));  // hae and via ecy
// console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));  // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau


// 25 + 25 + 12