/* Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower

Our function should be able to handle all of these cases. */



const makeCase = function (input, cases) {

  const whitespace = ' ';
  let a;
  let counter = 0;

  while (counter < cases.length) {


    switch (cases[counter]) {

      case '':           // camel
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // pascal
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // snake
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // kebab
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // title
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // vowel
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // consonant
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // upper
        // code;
        if (condition) {
          counter++;
          break;
        }
      case '':           // lower
        // code;
        if (condition) {
          counter++;
          break;
        }
      default:
        return 'enjoy your meal!';
    }
  }
};



console.log(makeCase("this is a string", "camel")); // thisIsAString
console.log(makeCase("this is a string", "pascal")); // ThisIsAString
console.log(makeCase("this is a string", "snake")); // this_is_a_string
console.log(makeCase("this is a string", "kebab")); // this-is-a-string
console.log(makeCase("this is a string", "title")); // This Is A String
console.log(makeCase("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCase("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCase("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING




// of 240 minutes .. 27+


/* I have decided to try out a switch statement*/

// ==============================================================================

/* const makeCase = function (input, cases) {

  const toggle = {
    camel: false,
    pascal: false,
    snake: false,
    kebab: false,
    title: false,

    vowel: false,
    consonant: false,

    upper: false,
    lower: false,
  }

  // toggler style: on
  cases.forEach(style => toggle[style] = true);




   */