const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((oldest, person) => {
        const lastYear = (person.yearOfDeath == undefined) ? 2025 : person.yearOfDeath;
        const age = lastYear - person.yearOfBirth;

        const oldestLastYear = (oldest.yearOfDeath == undefined) ? 2025 : oldest.yearOfDeath;
        const oldestAge = oldestLastYear - oldest.yearOfBirth;
        return age > oldestAge ? person : oldest;
    }, peopleArray[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
