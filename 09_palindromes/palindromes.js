const palindromes = function (string) {
    cleaned = string.replace(/[^\w]|_/g,'').toLowerCase()
    reversed = [...cleaned].reverse().join('')
    return cleaned === reversed
};

// Do not edit below this line
module.exports = palindromes;
