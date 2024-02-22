const palindromes = function() {
  let initial = arguments[0]
    // replace all punctuation characters with "" as well as /\s which is all white space
    //essentially just remove verything other then letters and nums and to make a full compacted string for comparison
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()/\s]/g, "")
    .toLowerCase()
    .trim();
  //make a reversed array using the value of "initial", then "join" all elements together to make a string
  let backwardsArr = Array.from(initial).reverse();
  let backwardsWord = backwardsArr.join("");

  // if any characters are different return false
  for (let i = 0; i < initial.length; i++) {
    if (initial[i] !== backwardsWord[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
