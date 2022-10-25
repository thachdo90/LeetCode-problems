// var countOfAtoms = function(formula) {
//   formula += 'X' //padding that doesn't get computed
//   let atoms = {};
//   let atomName = '';
//   let atomCount = 0;
//   for (let character of formula) {
//     if (character.charCodeAt() >= 65 && character.charCodeAt() <= 90) {
//       // uppercase letter, starts name
//       if (atomCount > 0) {
//         console.log('adding ', atomName, ' with count ', atomCount)
//         atoms[atomName] = (atoms[atomName] || 0) + atomCount;
//       }
//       atomName = character;
//       atomCount = 1;
//     } else if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122) {
//       // lowercase letter, continues name
//       atomName += character;
//     } else if (!isNaN(character)) {
//       // handle case where number is double digits
//       console.log('adding ', atomName, ' with count ', parseInt(character))
//       atoms[atomName] = (atoms[atomName] || 0) + parseInt(character);
//       atomName = '';
//     }
//   }

//   console.log(atoms)
//   let result = ''
//   let atomNames = Object.keys(atoms).sort()
//   for (let name of atomNames) {
//     let suffix = atoms[name] === 1 ? '' : atoms[name];
//     result += name + suffix;
//   }
//   return result;

// };


/**
 * @param {string} formula
 * @return {string}
 */
// I: string
// O: string, ordered, name and count of atom
// C:
// E: nested groupings
// Strategy: Iterate through string, store atoms and counts into object
// iterate through object and print it out into a string
// different cases to handle
// case 1: single letter
// case 2: two letters
// case 3: parentheses for grouping

// helper functions to process substring (string, multiplier)
// declare atoms = {};
// iterate through substring, update atoms object
// return atoms object;

// iterate through formula
// store substring
  // process substring when we encouter a new uppercase or an uppercase

// String.prototype.isUppercase = function() {
//   return this.charCodeAt() >= 65 && this.charCodeAt() <= 90;
// }
// String.prototype.isLowercase = function() {
//   return this.charCodeAt() >= 97 && this.charCodeAt() <= 122;
// }
// String.prototype.isNumber = function() {
//   return (!isNaN(this))
// }
// var countOfAtoms = function(formula) {
//   let atoms = {};

//   const processString = (string, multiplier) => {
//     let storage = {};
//     let atomName = '';
//     let count = 0;
//     let numString = '';
//     for (let character of string) {
//       if (character.isUppercase()) {
//         if (atomName.length > 0) {
//           storage[atomName] = (storage[atomName] || 0) + (parseInt(numString) || count)
//         }
//         numString = '';
//         atomName = character;
//         count = 1;
//       } else if (character.isLowercase()) {
//         atomName += character;
//       } else if (character.isNumber()) {
//         numString += character;
//       }
//     }
//     storage[atomName] = (storage[atomName] || 0) + (parseInt(numString) || count)
//     return storage;
//   }
// };

// Second iteration
String.prototype.isUppercase = function() {
  return this.charCodeAt() >= 65 && this.charCodeAt() <= 90;
}
String.prototype.isLowercase = function() {
  return this.charCodeAt() >= 97 && this.charCodeAt() <= 122;
}
String.prototype.isNumber = function() {
  return (!isNaN(this))
}
var countOfAtoms = function(formula, multiplier = 1) {
  let storage = {};
  let atomName = '';
  let count = 0;
  let numString = '';
  let openedGroup = false;
  let closedGroup = false;
  let openParens = 0;
  let subGroup = '';
  let subGroupCount = '';
  for (let character of formula) {
    if (closedGroup) {
      if (character.isNumber()) {
        subGroupCount += character;
        // number was recorded but not processed
        continue;
      } else {
        let subResults = countOfAtoms(subGroup, parseInt(subGroupCount) || 1);
        for (let [key, value] of Object.entries(subResults)) {
          storage[key] = (storage[key] || 0) + value;
        }
        openedGroup = false;
        closedGroup = false;
        openParens = 0;
        subGroup = '';
        subGroupCount = '';
      }
    }

    if (openedGroup) {
      if (character === '(') {
        openParens += 1;
      } else if (character === ')') {
        openParens -= 1;
        if (openParens === 0) closedGroup = true;
      } else {
        subGroup += character;
      }
    } else {
      if (character.isUppercase()) {
        if (atomName.length > 0) {
          storage[atomName] = (storage[atomName] || 0) + multiplier * (parseInt(numString) || count)
        }
        numString = '';
        atomName = character;
        count = 1;
      } else if (character.isLowercase()) {
        atomName += character;
      } else if (character.isNumber()) {
        numString += character;
      } else if (character === '(') {
        openedGroup = true;
        openParens = 1;
      }
    }
  }
  storage[atomName] = (storage[atomName] || 0) + multiplier * (parseInt(numString) || count)
  return storage;
};