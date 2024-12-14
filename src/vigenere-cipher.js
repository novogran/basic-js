const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direction) {
    (isNaN(direction))? this.direction = true: this.direction = direction;
  }
  encrypt(str, key) {
    if (typeof str !== "string" || typeof key !== "string" ) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < str.length; i += 1) {
      let char = str[i].toUpperCase();
      if (/[A-Z]/.test(char)) {
        const shift = key.toUpperCase()[keyIndex % key.length].charCodeAt(0) - "A".charCodeAt(0);
        result += String.fromCharCode(((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26) + "A".charCodeAt(0));
        keyIndex += 1;
      } else {
        result += char;
      }
    }
    return (this.direction)? result : result.split('').reverse().join('');
  }
  decrypt(str, key) {
    if (typeof str !== "string" || typeof key !== "string" ) {
      throw new Error('Incorrect arguments!');
    }
    let result = '';
    let keyIndex = 0;
    for (let i = 0; i < str.length; i += 1) {
      let char = str[i].toUpperCase();
      if (/[A-Z]/.test(char)) {
        const shift = key.toUpperCase()[keyIndex % key.length].charCodeAt(0) - "A".charCodeAt(0);
        result += String.fromCharCode(((char.charCodeAt(0) - "A".charCodeAt(0) - shift + 26) % 26) + "A".charCodeAt(0));
        keyIndex += 1;
      } else {
        result += char;
      }
    }
    return (this.direction)? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
