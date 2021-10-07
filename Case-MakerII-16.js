/* Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower

Our function should be able to handle all of these cases. */

// +1hr + 45 + 1hr

const makeCase = function (input, cases) {

  let processed = [];
  const whitespace = ' ';
  const vowel = 'aeiou';
  const skipSeparators = ' -_';


  const precedence = [
    ['camel', 'pascal', 'snake', 'kebab', 'title'],
    ['vowel', 'consonant'],
    ['upper', 'lower'],
    { positon1: [], position2: [], position3: [] } // precedence[3]
  ];



  // case Methods
  const caseFilter = {

    // PRECEDENCE 1


    // case 1: CAMEL CASE
    camel: function (input) {
      let n = 0;  // manual shift

      for (let i = 0; i < input.length; i++) {
        let index = i + n

        //base camel
        if (input[index] === undefined) {
          return processed.join('');

        } else {

          if (input[index] === whitespace) {
            processed[index] = input[index + 1].toUpperCase();
            n++

          } else {
            processed[index] = input[index];
          }
        }
      }
    },

    // case 2: PASCAL

    pascal: function (input) {
      let n = 0;  // manual shift

      processed[0] = input[0].toUpperCase();

      for (let i = 1; i < input.length; i++) {
        let i = i + n

        //base camel
        if (input[i] === undefined) {
          return processed.join('');

        } else {

          if (input[i] === whitespace) {
            processed[i] = input[i + 1].toUpperCase();
            n++

          } else {
            processed[i] = input[i];
          }
        }
      }
    },

    //case 3: SNAKE

    snake: function (input) {
      for (let i = 0; i < input.length; i++) {

        if (input[i] === whitespace) {
          processed[i] = '_';

        } else {
          processed[i] = input[i];
        }
      }
      return processed.join('');
    },

    //case 4: KEBAB

    kebab: function (input) {
      for (let i = 0; i < input.length; i++) {

        if (input[i] === whitespace) {
          processed[i] = '-';

        } else {
          processed[i] = input[i];
        }
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

    vowels: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (vowel.indexOf(input[i]) > -1) processed[i] = input[i].toUpperCase();
        else processed[i] = input[i];
      }
      return processed.join('');
    },

    consonants: function (input) {
      for (let i = 0; i < input.length; i++) {
        if (vowel.indexOf(input[i]) <= -1 && skipSeparators.indexOf(input[i]) <= -1) {
          processed[i] = input[i].toUpperCase();
        } else {
          processed[i] = input[i];
        }
      }
      return processed.join('');
    },


    // precedence 3:

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
        else processed[i] = input[i].tolowerCase();
      }
      return processed.join('');
    },

  };




  // base case
  if (cases.length < 1) {
    return input
  }

  // set precedence to the cases: loop to temps; then re-assign to same var so you dont alter the code.
  cases = [cases]
  let precedenceTemp = [];
  for (let i = 0; i < cases.length; i++) {
    const cas = cases[i];
    if (precedence[0].indexOf(cas) > -1) precedence[3].positon1 = [cas];
    else if (precedence[1].indexOf(cas) > -1) precedence[3].positon2 = [cas];
    else precedence[3].positon3 = [cas];
  }
  cases = precedenceTemp.concat(precedence[3].positon1).concat(precedence[3].positon2).concat(precedence[3].positon3)

  // insert key
  const popCase = cases.splice(0, 1) // cases less one
  let processedTemp = caseFilter[popCase[0]](input) // applied formatter

  return makeCase(processedTemp, cases)
}


console.log(makeCase("this is a string", "camel")); // thisIsAString
// console.log(makeCase("this is a string", "pascal")); // ThisIsAString
// console.log(makeCase("this is a string", "snake")); // this_is_a_string
// console.log(makeCase("this is a string", "kebab")); // this-is-a-string
// console.log(makeCase("this is a string", "title")); // This Is A String
// console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
// console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
// console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING





// of 240 minutes .. 47

