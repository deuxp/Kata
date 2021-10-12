const squareCode = function (message) {
  // no whitespace;
  message = message.split('');
  message = message.filter(character => character !== ' ');
  message = message.join('');
  // partitions: working square and crypted square
  let square = [];
  let cryptedSquare = [];

  const columnLength = Math.ceil(Math.sqrt(message.length));

  // take off each column length until string is empty
  while (message.length > 1) {
    let a = message.substring(0, columnLength);
    let b = message.substring(columnLength);
    square.push(a);
    message = b
  };
  for (let x = 0; x < columnLength; x++) {
    for (let y = 0; y < square.length; y++) {
      cryptedSquare.push(square[y][x]);
    }
    cryptedSquare.push(' ');
  }
  return cryptedSquare.join('');
};

console.log(squareCode("chill out"));  // clu hlt io  
console.log(squareCode("feed the dog"));  // fto ehg ee dd
console.log(squareCode("have a nice day"));  // hae and via ecy
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));  // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau


// 25 + 25 + 15 + 6 minutes