const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result;
  if (s1.length > s2.length) {
    let tempS1 = s1;
    const s2Arr = s2.split('')
    for (let i = 0; i < s1.length; i += 1) {
      if (s2Arr) {
        tempS1 = tempS1.replace(s2Arr.shift(),'');
      }
    }
    result = s1.length - tempS1.length;
  } else {
    let tempS2 = s2;
    const s1Arr = s1.split('')
    for (let i = 0; i < s2.length; i += 1) {
      if (s1Arr) {
        tempS2 = tempS2.replace(s1Arr.shift(),'');
      }
    }
    result = s2.length - tempS2.length;
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
