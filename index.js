function isPalindrome(word) {
  // Write your algorithm here
  let drow = word.split("").reverse().join("")
  return word === drow ? true : false
}

/* 
  Add your pseudocode here
  //define palindrome
*/ //take argument and pass to if / else statement to verify if argument is palindrome or not

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("beavis"))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
