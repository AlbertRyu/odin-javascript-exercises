const findTheOldest = function(people) {
    currentYear = new Date().getFullYear()
    oldest = people.reduce(
        (currentOldest, next) => {
            currentAge = (currentOldest.yearOfDeath||currentYear) - currentOldest.yearOfBirth
            nextAge = (next.yearOfDeath||currentYear) - next.yearOfBirth
            return (nextAge > currentAge) ? next : currentOldest
        }
    )
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
