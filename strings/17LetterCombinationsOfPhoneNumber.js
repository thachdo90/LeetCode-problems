/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  if (digits.length === 0) return []
  let map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let results = [];
  let array = [];
  const process = (index) => {
    let number = digits[index];
    let letters = map[number];
    for (let i = 0; i < letters.length; i++) {
      array.push(letters[i]);
      console.log(array);
      if (index === digits.length - 1) {
        let entry = array.join('');
        results.push(entry);
      } else {
        process(index + 1);
      }
      array.pop();
    }
  }
  process(0);
  return results;
};