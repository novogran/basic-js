const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let counter = 0;
  let strArr = str.split('');
  let prevVal = strArr[0];
  strArr.forEach((value, index) => {
    if (value === prevVal) {
      counter += 1;
    } else {
      if(counter > 1) result.push(counter);
      result.push(prevVal);
      counter = 0;
      counter += 1;
      prevVal = value;
    }
    if (index === strArr.length - 1) {
      if(counter > 1) result.push(counter);
      result.push(prevVal);
    }
  })
  return result.join('');
}

module.exports = {
  encodeLine
};
