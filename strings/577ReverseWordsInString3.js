/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  const reverseWord = (word) => {
    word = word.split('');
    let p1 = 0;
    let p2 = word.length - 1;
    while (p1 < p2) {
      [word[p1], word[p2]] = [word[p2], word[p1]];
      p1++;
      p2--;
    }
    word = word.join('')
    return word;
  }
  let result = '';
  let word = '';
  for (let character of s) {
    if (character === ' ') {
      result += reverseWord(word) + ' ';
      word = '';
    } else {
      word += character
    }
  }
  result += reverseWord(word)
  return result;

};