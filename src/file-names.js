const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let counterLevelOne = 1;
  let counterLevelTwo = 1;
  if(names.length === 0) return names;
  for(let i=1; i<names.length; i+=1){
    if(names[0] === names[i]) {
      names[i] = names[i] + "(" + counterLevelOne + ")"
      counterLevelOne+=1
    } else {
      if(names[i] === names[0] + "(" + 1 + ")") {
        names[i] = names[i] + "(" + counterLevelTwo + ")"
        counterLevelTwo+=1;
      }
    }
  }
  return names
}


module.exports = {
  renameFiles
};
