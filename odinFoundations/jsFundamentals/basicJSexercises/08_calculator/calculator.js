const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
  return arguments[0] - arguments[1];
};

const sum = function() {
  let arr = arguments[0];

  //this works
  // let sum = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   sum += arr[i];
  // }

  // check if length > 0 if so reduce each element to a single sum of all the elements, if not return 0
  if (arr.length > 0) {
    return arr.reduce((sum, currentItem) => (sum += currentItem));
  } else {
    return 0;
  }
};

const multiply = function() {
  let arr = arguments[0];
  let product = 1;
  arr.forEach(element => {
    product = product * element;
  });
  return product;
};

const power = function() {
  return Math.pow(arguments[0], arguments[1]);
};

const factorial = function() {
  let counter = arguments[0];
  let result = 1;
  for (counter; counter > 0; counter--) {
    result = result * counter;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
