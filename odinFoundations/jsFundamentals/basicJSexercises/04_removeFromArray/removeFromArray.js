//removes a variable number of given inputs from a given array 
const removeFromArray = function() {

    //arguments is a JS keyword. This is basically an array of given parameters passed to a function allowing us to take variable number of inputs
    const givenArr = arguments[0];
    let numRemoval = arguments.length-1; 

    // while loop is keeping trakc of the total number of arguments the user wishes to remove from the given array
    while (numRemoval > 0){

        // this for loop is to keep allow us to deal with a variable number of arguments, letting us splice out each one if it is in the given array
        for(let i = 1; i < arguments.length; i++){
            
            //get index of the argument to be removed
            let index = givenArr.indexOf(arguments[i])

            //indexOf() method returns -1 if the item is not in the array 
            if (index != -1){
                
                // splice the specific index once
                givenArr.splice(index,1);
            }
        }
        numRemoval--;
    }
    return givenArr;
};

// Do not edit below this line
module.exports = removeFromArray;
