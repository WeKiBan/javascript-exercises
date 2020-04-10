let findTheOldest = function (arr) {
    return arr.reduce((oldestSoFar, nextPerson) => {
        return getAge(oldestSoFar) > getAge(nextPerson) ? oldestSoFar : nextPerson;
    });

}

function getAge (person) {
    if (person.yearOfDeath) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return new Date().getFullYear() - person.yearOfBirth;
    }
}

module.exports = findTheOldest;
