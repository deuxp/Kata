
const urlEncode = function (text) {
  let encodedWord = [];
  let trimdword = text.trim();
  for (let letter = 0; letter < trimdword.length; letter++) {
    if (trimdword[letter] === ' ') {
      encodedWord += '%20';
    } else {
      encodedWord += trimdword[letter];
    }
  }
  return encodedWord
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

