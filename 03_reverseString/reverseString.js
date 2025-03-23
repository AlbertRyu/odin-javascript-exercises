const reverseString = function(some_string) {
    // Each char goes the a new array with 
    // new_index = str.length - own_index
    let result = []
    for (i=0;i<some_string.length;i++){
        result[some_string.length-i] = some_string[i]
    }
    return result.join('')
};

// Do not edit below this line
module.exports = reverseString;
