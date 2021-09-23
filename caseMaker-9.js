const camelCase = function (input) {


  const whitespace = ' '; // whitespace identifier
  let shiftIndex = 0; // manually shift index on whitespace detection
  let cameled = ''; // camel cased letter by letter; brutish

  for (letter = 0; letter < input.length; letter++) { // for each letter from the input

    if (input[letter + shiftIndex] === undefined) { // once end of sequence is met; return
      return cameled
    }
    if (input[letter + shiftIndex] === whitespace) { // initiate whitespace protocol
      shiftIndex++; //  index shift
      cameled += (input[letter + shiftIndex]).toUpperCase(); // bypass whitespace & force caps-> [letter + 1].toUppercase()
    } else {
      cameled += input[letter + shiftIndex];
    }
  }
  return input // default if no whitespace
};

console.log(camelCase("this is a string")); // thisIsAString
console.log(camelCase("loopy lighthouse")); // loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // supercalifragalisticexpialidocious


// took a bit longer to debug the first iteration