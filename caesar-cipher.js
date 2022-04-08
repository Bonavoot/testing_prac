function ceaserCipher(str, num) {
  let newString = "";
  let newLetterNum = "";

  for (let i = 0; i < str.length; i++) {
    newLetterNum = getAsciiNumber(str[i], num);
    newString += String.fromCharCode(newLetterNum);
  }
  return newString;
}

function getAsciiNumber(letter, num) {
  let newLetter = "";

  if (
    letter.charCodeAt() + num > 122 ||
    (letter.charCodeAt() + num > 90 && letter.charCodeAt() + num < 97)
  ) {
    newLetter += letter.charCodeAt() + num - 26;
    return newLetter;
  } else {
    newLetter += letter.charCodeAt() + num;
    return newLetter;
  }
}

module.exports = ceaserCipher;
