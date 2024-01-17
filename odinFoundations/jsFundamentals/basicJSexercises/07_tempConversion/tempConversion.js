const convertToCelsius = function() {
  if(((arguments[0]-32)*(9/5)) == 0) {
    return 0;
  }
  else {
    return (+((arguments[0]-32)*(5/9)).toFixed(1));
    
  }
};

const convertToFahrenheit = function() {
  if(((arguments[0]+32)*(9/5)) == 0) {
    return 0;
  }
  else {
    return (+((arguments[0]*(9/5))+32).toFixed(1));
    
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
