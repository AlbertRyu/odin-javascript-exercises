const leapYears = function(thisYear) {
    // Two Scenorio:
    // 1. Divisible by 100
    // Then is LeapYear if divisiable by 400
    // 2. Not Divisible by 100
    // Then is LeapYear if divisible by 4
    return thisYear % 100 === 0 ? (thisYear % 400 === 0) : (thisYear % 4 === 0)
};

// Do not edit below this line
module.exports = leapYears;
