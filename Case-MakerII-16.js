/* Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower

Our function should be able to handle all of these cases. */

const makeCase = function (input, cases) {

  let processed = [];
  const whitespace = ' ';
  const vowel = 'aeiou';
  const skipSeparators = ' -_';
  let rankedList = [];


  const precedenceRank = {
    camel: 0,
    pascal: 1,
    snake: 2,
    kebab: 3,
    title: 4,
    vowel: 5,
    consonant: 6,
    upper: 7,
    lower: 8,
    ordered: []
  };

  const styleDictionary = {

    // PRECEDENCE 1
    // case 1: CAMEL CASE
    camel: function (input) {
      const CAPITAL = 1;
      let manualShift = 0;  // manual shift
      for (let i = 0; i < input.length; i++) {
        let index = i + manualShift

        if (input[index] === whitespace) {
          processed[index] = input[index + CAPITAL].toUpperCase();
          manualShift++;
        } else {
          processed[index] = input[index];
        }
      }
      return processed.join('');
    },

    // case 2: PASCAL
    pascal: function (input) {
      let manualShift = 0;  // manual shift
      processed[0] = input[0].toUpperCase();
      for (let i = 1; i < input.length; i++) {
        let index = i + manualShift

        if (input[index] === whitespace) {
          processed[index] = input[index + 1].toUpperCase();
          manualShift++
        } else {
          processed[index] = input[index];
        }
      }
      return processed.join('');
    },

    //case 3: SNAKE
    snake: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === whitespace) processed[i] = '_';
        else processed[i] = input[i];
      }
      return processed.join('');
    },

    //case 4: KEBAB
    kebab: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] === whitespace) processed[i] = '-';
        else processed[i] = input[i];
      }
      return processed.join('');
    },

    // case 5: TITLE
    title: function (input) {
      processed[0] = input[0].toUpperCase();

      for (let i = 1; i < input.length; i++) {
        if (input[i - 1] === whitespace) processed[i] = input[i].toUpperCase();
        else processed[i] = input[i];
      }
      return processed.join('');
    },

    // PRECEDENCE 2:
    // case 6: vowels
    vowel: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (vowel.indexOf(input[i]) > -1) processed[i] = input[i].toUpperCase();
        else processed[i] = input[i];
      }
      return processed.join('');
    },

    consonant: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (vowel.indexOf(input[i]) <= -1 && skipSeparators.indexOf(input[i]) <= -1) processed[i] = input[i].toUpperCase();
        else processed[i] = input[i];
      }
      return processed.join('');
    },
    // precedenceRank 3:
    // case: upper
    upper: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (skipSeparators.indexOf(input[i]) > -1) processed[i] = input[i];
        else processed[i] = input[i].toUpperCase();
      }
      return processed.join('');
    },
    // case: lower
    lower: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (skipSeparators.indexOf(input[i]) > -1) processed[i] = input[i];
        else processed[i] = input[i].toLowerCase();
      }
      return processed.join('');
    },
  }


  if (cases.length < 1) return input
  // guard clause: convert string to a one item array.
  if (typeof cases === 'string') cases = [cases];
  // sort the cases list
  for (let i = 0; i < cases.length; i++) {
    const STYLE = cases[i];

    if (precedenceRank[STYLE] < 5) rankedList[0] = STYLE;
    else if (precedenceRank[STYLE] > 6) rankedList[2] = STYLE;
    else rankedList[1] = STYLE;
  }

  cases = rankedList.filter(style => typeof style !== 'undefined') // cases reassign
  let styleChoice = cases.splice(0, 1);
  return makeCase(styleDictionary[styleChoice](input), cases)

};

console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

