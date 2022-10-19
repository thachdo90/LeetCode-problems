// I: array of strings, numeric value
// O: array of strings
// C: k specifies how many elements to return, O(nlogk) time and O(n) space
// E: number of unique items < k

// Strategy:
// declare object
// Iterate through array, store frequency e.g. {'love': 3}
// Generate new object, flip key and value, the value will be an array of strings with the same frequency e.g. {3: ['love']}
// get array of keys, sort it
// iterate through object and push items to results array

const topFrequentWords = (array, k) => {
  let freqTable = {};
  let results = [];
  let flippedTable = {};
  let resultCount = 0;
  for (let string of array) {
    freqTable[string] = (freqTable[string] || 0) + 1;
  }
  for (let [key, value] of Object.entries(freqTable)) {
    if (flippedTable[value]) {
      flippedTable[value].push(key)
    } else {
      flippedTable[value] = [key];
    }
  }
  let frequencies = Object.keys(flippedTable);
  frequencies.sort((a, b) => b - a);
  console.log('frequencies', freqTable)
  console.log('flipped frequencies', flippedTable)
  for (let frequency of frequencies) {
    if (flippedTable[frequency].length === 1) {
      results.push(flippedTable[frequency][0]);
      resultCount++;
      if (resultCount === k) {
        return results;
      }
    } else {
      let words = flippedTable[frequency];
      words.sort();
      for (let word of words) {
        results.push(word);
        resultCount++;
        if (resultCount === k) {
          return results;
        }
      }
    }
  }

}





let words;
// Test 1
words = ['i', 'love', 'leetcode', 'i', 'love', 'coding']
console.log(topFrequentWords(words, 3))

// Test 2
words = ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is']
console.log(topFrequentWords(words, 4))
