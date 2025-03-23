const removeFromArray = function(someArray,...theArgus) {

    /*
    for (toRemove of theArgus){
        someArray = someArray.filter(element => element !== toRemove)
    }
    return someArray
    */

    //Better way.
    return someArray.filter(ele => !theArgus.includes(ele))

};

// Do not edit below this line
module.exports = removeFromArray;
