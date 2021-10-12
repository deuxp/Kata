/* Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower

Our function should be able to handle all of these cases. */




const makeCase = function (input, cases) {

  let processed = [];
  let index = 0;

  const whitespace = ' ';
  const vowel = 'aeiou';
  const skipSeparators = ' -_';

  const precedence = [
    ['camel', 'pascal', 'snake', 'kebab', 'title'],
    ['vowel', 'consonant'],
    ['upper', 'lower']
  ];

  const toggle = {
    kebab: '-',
    snake: '_',
    title: ' ',
    precedence1: '',
    precedence2: '',
    precedence3: '',
  }

  // set precedence -- stored in toggle object
  // for (let i = 0; i < cases.length; i++) {
  //   if (precedence[0].indexOf(cases[i]) > -1) toggle.precedence1 = cases[i];
  //   else if (precedence[1].indexOf(cases[i]) > -1) toggle.precedence2 = cases[i];
  //   else toggle.precedence3 = cases[i];
  // }

  if (condition) {

  }
  // first pass, first precedence
  do {
    // first letter upper
    if (toggle.precedence1 === 'title' || toggle.precedence1 === 'pascal') {
      processed[0] = input[0].toUppercase();
      index = 1;
    }
  } while (index < input.length) {

    // no whitespace
    if (toggle.precedence1 === 'camel' || toggle.precedence1 === 'pascal') {
      if (input[index] === whitespace) {
        processed[index] = input[index + 1].toUppercase();
        index++
      } else {
        processed[index] = input[index];
      }


    } else if (toggle.precedence1 ===) { // the newxt first precedence

    }





    index++
  }






  // do the next two loops as ternary
}

console.log(makeCase("this is a string", "camel")); // thisIsAString
