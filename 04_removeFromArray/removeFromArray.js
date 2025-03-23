const removeFromArray = function(someArray,...theArgus) {
    for (toRemove of theArgus){
        someArray = someArray.filter(element => element !== toRemove)
    }
    return someArray
};

// Do not edit below this line
module.exports = removeFromArray;
