// this function takes in a word and a number and returns a new word which is the given word repeated num times
const repeatString = function(word, num) {
    if(num === 0) {
        return "";
    }
    // check the 0 condition first so that it represents an empty string then check if its less then 1 to return an error (if not 0)
    else if(num < 1) {
        return "ERROR";
    }
    // if num isnt negative or 0 then return a new word which is the given word repeated "num" times
    else {
        var newWord = '';
        for (let i = 0; i < num; i++) {
            newWord = newWord + word;
        }
        return newWord;
    }
};

// Do not edit below this line
module.exports = repeatString;
