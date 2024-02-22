const findTheOldest = function() {
  const ppLArr = arguments[0];

  //checks if year of death is defined if not just set yearOfDeath to current year so we can get current age of the person
  if (ppLArr[0].yearOfDeath === undefined) {
    ppLArr[0].yearOfDeath = 2024;
  }
  // set oldest age = to yearOfDeath - yearOfBirth of the first person in the array
  let oldestAge = ppLArr[0].yearOfDeath - ppLArr[0].yearOfBirth;
  //set name of oldest to the name of the first person in the array
  let oldestName = ppLArr[0];
  let currentYear = 2024;

  // for each person in the array, check their age against current oldest age, if older then current "oldest" update oldestAge and oldestName
  ppLArr.forEach(function(item) {
    if (item.yearOfDeath - item.yearOfBirth > oldestAge) {
      oldestAge = item.yearOfDeath - item.yearOfBirth;
      oldestName = item;
    }
  });
  return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;
