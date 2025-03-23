const repeatString = function(someString, repeatTimes) {
    let resultString = '';
    if (repeatTimes < 0) {
        return "ERROR"
    }
    while(repeatTimes) {
        resultString += someString
        repeatTimes --
    }
    return resultString
}
// Do not edit below this line
module.exports = repeatString;
