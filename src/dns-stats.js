const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let revertFlag = false;
  if (!domains) return {};
  for (let i = 0; i < domains.length; i += 1) {
    let domain = '';
    let domainName = '';
    let domainPart = '';
    for (let j = domains[i].length - 1; j >= 0; j -= 1) {
      let counter = 0;
      if (domains[i][j] === '.' || j === 0) {
      if(j === 0) domainPart = domains[i][j] + domainPart;
        domainPart = '.' + domainPart;
        domainName = domainName + domainPart;
        domain = domainPart + domain;
        console.log(domain)
        domains.forEach((value) => {
          let temp;
          (domain[0] === '.')? temp = domain.substr(1) : temp = domain;
          if (value.includes(temp)) counter += 1;
        })
        result[domainName] = counter;
        counter = 0;
        domainPart = '';
      } else {
        domainPart = domains[i][j] + domainPart;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
