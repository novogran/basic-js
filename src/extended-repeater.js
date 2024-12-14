const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = (options.addition !== undefined)? `${options.addition}` : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  for (let i = 1; i <= repeatTimes; i += 1) {
    let additions = '';
    for (let j = 1; j <= additionRepeatTimes; j += 1) {
      (j === additionRepeatTimes) ? additions += addition : additions += addition + additionSeparator;
    }
    (i === repeatTimes) ? result += str + additions : result += str + additions + separator;
  }
  return result;
}

module.exports = {
  repeater
};
