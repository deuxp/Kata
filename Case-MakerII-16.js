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






  // case Methods
  const caseFilter = {

    // PRECEDENCE 1


    // case 1: CAMEL CASE
    camel: function (input) {
      let n = 0;  // manual shift

      for (let i = 0; i < input.length; i++) {
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

      // const skipSeparators = ' -_';

      for (let i = 0; i < input.length; i++) {

        if (skipSeparators.indexOf(input[i] > -1)) { // in list
          continue;

        } else if {
          // in the vowels list
          // processed[i] = input[i];
        }
      }
      return processed.join('');
    },


  };




  // base case
  if (cases.length < 1) {
    return input
  }

  // set precedence: loop to temps; then reassign to same var so you dont alter the code.







}


console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING





// of 240 minutes .. 47

