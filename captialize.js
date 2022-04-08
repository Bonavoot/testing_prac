function capitalize(string) {
  let capitalizedFirstLetter = string.charAt(0).toUpperCase();
  capitalizedFirstLetter += string.slice(1);
  return capitalizedFirstLetter;
}

module.exports = capitalize;
