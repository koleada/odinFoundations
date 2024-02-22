// this functions returns the fibonacci number at the given index
// fibonacci number at any given index is the previous 2 values added. The first few values are [0, 1, 1, 2] so the fibonacci number at index 4 would be 3 (2+1)
const fibonacci = function() {
  let beginning = [0, 1, 1];
  // check for negatives and non numbers
  if (arguments[0] < 0 && arguments[0] !== NaN) {
    return "OOPS";
  } else {
    let end = arguments[0];

    for (let i = 2; i <= end; i++) {
      // the value of the next index is the sum of the previous 2 indices
      beginning[i + 1] = beginning[i - 1] + beginning[i];
    }
    return beginning[end];
  }
};

// Do not edit below this line
module.exports = fibonacci;
