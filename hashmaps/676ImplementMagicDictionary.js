// store new words in a hashmap where the key is the length of the word
// the value of this hashmap will be an array
// each element of the array will a hashmap representation of that word
// this hashmap will be {letter: frequency}
// when searching, we'll only look at the bucket where the size is the same, we'll iterate through the array in that bucket
// at each pass, we'll construct hashmap for the current word and compare it to the hashmap in the array,
// we'll keep track of the difference in character frequency, at the end this difference should be exactly one
var MagicDictionary = function() {
  this.storage = {};
};

/**
* @param {string[]} dictionary
* @return {void}
*/
MagicDictionary.prototype.buildDict = function(dictionary) {
  for (let word of dictionary) {
      if (this.storage[word.length]) {
          this.storage[word.length].push(word);
      } else {
          this.storage[word.length] = [word];
      }
  }

};

/**
* @param {string} searchWord
* @return {boolean}
*/
MagicDictionary.prototype.search = function(searchWord) {
  // iterate through first word, create a hash map
  // iterate through second word, decrement that character on the hashmap, if it doesn't exist, set it to negative one
  // iterate through the values of the hashmap, everything should be 0 and only one element should be -1
  const differByOne = (word1, word2) => {
      let negativeOne = false;
      let positiveOne = false;
      console.log('comparing ', word1, 'and ', word2)
      let charTable = {};
      for (let char of word1) {
          charTable[char] = (charTable[char] || 0) + 1;
      }
      for (let char of word2) {
          charTable[char] = (charTable[char] || 0) - 1;
      }
      console.log(charTable)
      let values = Object.values(charTable);
      console.log(values);
      for (let value of values) {
          if (value === 1) {
              if (positiveOne) {
                  return false;
              } else {
                  positiveOne = true;
              }
          } else if (value === -1) {
              if (negativeOne) {
                  return false;
              } else {
                  negativeOne = true;
              }
          } else {
              if (value !== 0) {
                  return false;
              }
          }
      }
      console.log('got here')
      console.log(negativeOne, positiveOne)
      return negativeOne && positiveOne;
  }

  if (this.storage[searchWord.length]) {
      for (let word of this.storage[searchWord.length]) {
          if (differByOne(word, searchWord)) {
              return true;
          }
      }
  }

  return false;
};

/**
* Your MagicDictionary object will be instantiated and called as such:
* var obj = new MagicDictionary()
* obj.buildDict(dictionary)
* var param_2 = obj.search(searchWord)
*/

let magicDictionary = new MagicDictionary();
magicDictionary.buildDict(["hello", "leetcode"]);
magicDictionary.search("hello"); // return False
magicDictionary.search("hhllo"); // We can change the second 'h' to 'e' to match "hello" so we return