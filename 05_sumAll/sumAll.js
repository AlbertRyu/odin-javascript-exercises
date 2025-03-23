const sumAll = function(one_end, another_end) {

    if (one_end < 0 || another_end < 0){
        return 'ERROR'
    }

    if (Math.floor(one_end) != one_end 
    || Math.floor(another_end) != another_end) {
        return 'ERROR'
    }

    if (typeof(one_end) !== 'number' 
    || typeof(another_end) !== 'number') {
        return 'ERROR'
    }

    // Determin which end is the left.
    left_end = Math.min(one_end,another_end)
    right_end = Math.max(one_end,another_end)

    let sum = 0
    for (i = left_end; i<=right_end; i++)
        sum += i
    return sum
};

// Do not edit below this line
module.exports = sumAll;
