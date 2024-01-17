const leapYears = function() {

    var year = arguments[0];


    if (typeof year == "number") {
        
        if (year % 100 == 0 && year % 400 == 0) {
            return true;
        }
        else if (year % 100 == 0 && year % 400 != 0) {
            return false;
        }
        else if (year % 4 == 0 ){
            return true;
        }
        else{
            return false;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
