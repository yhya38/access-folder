// program to check if the string is palindrome or not

// A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome.

function checkPalindrome(str) {

  // find the length of a string
  const len = str.length;

  // loop through half of the string
    for (let i = 0; i < len / 2; i++) {
      
    // check if first and last string are same
    if (str[i] !== str[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

console.log(checkPalindrome('madam')) //Prints: It is a palindrome
console.log(checkPalindrome('hello')) //Prints: It is not a palindrome

