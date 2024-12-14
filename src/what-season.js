const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  try {
    isNaN(date.getTime());
    !(date instanceof Date);
    isNaN(date);
  } catch (e) {
    throw new Error("Invalid date!");
  }
  const month = date.getMonth()
  console.log(month)
  return (2 <= month && month <= 4)? "spring" : (5 <= month && month <= 7)? "summer": (8 <= month && month <= 10)? "autumn" : "winter";
}

module.exports = {
  getSeason
};
