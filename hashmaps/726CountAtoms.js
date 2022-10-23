var countOfAtoms = function(formula) {
  formula += 'X' //padding that doesn't get computed
  let atoms = {};
  let atomName = '';
  let atomCount = 0;
  for (let character of formula) {
    if (character.charCodeAt() >= 65 && character.charCodeAt() <= 90) {
      // uppercase letter, starts name
      if (atomCount > 0) {
        console.log('adding ', atomName, ' with count ', atomCount)
        atoms[atomName] = (atoms[atomName] || 0) + atomCount;
      }
      atomName = character;
      atomCount = 1;
    } else if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122) {
      // lowercase letter, continues name
      atomName += character;
    } else if (!isNaN(character)) {
      // handle case where number is double digits
      console.log('adding ', atomName, ' with count ', parseInt(character))
      atoms[atomName] = (atoms[atomName] || 0) + parseInt(character);
      atomName = '';
    }
  }

  console.log(atoms)
  let result = ''
  let atomNames = Object.keys(atoms).sort()
  for (let name of atomNames) {
    let suffix = atoms[name] === 1 ? '' : atoms[name];
    result += name + suffix;
  }
  return result;

};