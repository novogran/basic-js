const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const sortDigits = n.toString(10).split('').sort((a,b) => a - b);
  const delMinDih = parseInt(n.toString(10).replace(sortDigits[0],''));
  const delNextForMinDig = parseInt(n.toString(10).replace(sortDigits[1],''));
  if(delNextForMinDig > delMinDih) return delNextForMinDig;
  return delMinDih;
}

module.exports = {
  deleteDigit
};
