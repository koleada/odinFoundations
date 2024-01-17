//takes in 2 numbers (in the form (start,end)) and returns a sum of all numbers in between them including the end points
const sumAll = function() {

    //check if args are non-negative and are in-fact numbers
    if (arguments[0] >= 0 && arguments[1] >= 0 && typeof arguments[0] == "number" && typeof arguments[1] == "number" ) {

        //insure both are numbers using urary operator (just to be extra safe:) ) 
        var start = +arguments[0]; 
        var end = +arguments[1];

        //check if start is greater than end and if so switches them such that start is less than end
        if (start > end) {
            let holder = end;
            end = start;
            start = holder;
        }
    
        // sum all the numbers in-between and including start and end
        let total = 0;
        for(let i = start; i <= end; i++){
            total += i;
        }
    
        return total; 
    }
    //return error if above conds. are not met
    else {
        return "ERROR";
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
