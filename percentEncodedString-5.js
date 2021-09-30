/* 
const urlEncode = function (text) {
  let encodedWord = [];
  let text = text.trim();
  for (let letter = 0; letter < text.length; letter++) {
    if (text[letter] === ' ') {
      encodedWord += '%20';
    } else {
      encodedWord += text[letter];
    }
  }
  return encodedWord
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure")); */






const urlEncode = function (text) {

  let encodedWord = [];

  // trims outer white space
  while (text[0] === ' ' || text[text.length - 1] === ' ') {
    if (text[0] === ' ') {
      text = text.slice(1, text.length)
    } else {
      text = text.slice(0, text.length - 1)
    }
  }

  // replaces the inner whitespace with encoding
  for (let letter = 0; letter < text.length; letter++) {
    if (text[letter] === ' ') {
      encodedWord += '%20';
    } else {
      encodedWord += text[letter];
    }
  }
  return encodedWord
};


console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

