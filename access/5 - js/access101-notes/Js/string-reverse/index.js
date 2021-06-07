function strReverse(str) {
  // create an empty string
  let newStr = "";
  // During the first iteration, 
  // str.length - 1 gives the position of the last element.
  // That element is added to the newString variable.
  // This process continues for all the string elements.
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

console.log(strReverse("hello")); //Prints: olleh
