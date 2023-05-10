//imports an array of 200k+ english words
const words = require('an-array-of-english-words')

function findShortestString(arr) {
  // type your code here
  //temp lowest index
  let i = 0
  //iterates over the array, if the length of a word at index n is lower than the word at index i, set i equal to n
  for(let n = 0; n < arr.length; n++) {
    arr[n].length < arr[i].length ? i = n:false
  }
  return arr[i]
}

function benchmark() {
  const startTime = Date.now()
  const shortArr = ['cat', 'hi', 'a']
  for(let i = 0; i < 1000; i++) {
    findShortestString(words)
  }
  console.log((Date.now() - startTime)/2000)
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  benchmark()
}

module.exports = findShortestString;

// Please add your pseudocode to this file
//iterate over the entire array
//set a temp lowest index of 0
//set a temp lowest length to the length of the string in the lowest position
//iterate over the array, updating the index if a string has a lower value
//return a string at the end


// And a written explanation of your solution
// Store the index of the word with the lowest value and return the word from the array after iterating over the entire array
// Because we only update the index if the value is lower, the end result is always the first instance of the word with a given length