// this function will return the given string in reverse order
const reverseString = function(word) {
    var newWord = "";
    for (var i = word.length-1; i >= 0; i--) {
        newWord = newWord + word[i];
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
