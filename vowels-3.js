const numberOfVowels = function (data) {

  let counter = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Checking each letter against each vowel -> tally counter if vowel
  for (let letter of data) {
    for (let vowel of vowels) {
      if (letter === vowel) {
        counter++;
      }
    }
  }
  return counter
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


// 15 of 60 minutes

