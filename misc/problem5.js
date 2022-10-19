// I: string representation of binary integer
// O: numeric value
// C: none
// E:

// brute force: generate all substrings and check each substring for condition
// second strategy: iterate through the string, at each character, we solve a sub problem, what's the largest group that can be created with THIS character in it, while obeing the two conditions, store this in a set. At the end, return the size of the set
// similar to looking for palindrome
// time: O(n^2)
// correction: duplicates are okay, we count them

// pseudocode for processing substrings
// if same as first char,
  //if hasn't encountered opposite, increment count, add to goodSubStr
  //else return, we can disregard the rest of the string
// else, if diff than first char, flip encounteredOpposite to true, decrement count, add to goodSubStr
  //if count = 0, break the loop and record goodSubStr

let countSubstring = (string) => {
  let results = [];

  const process = (subString) => {
    let goodSubStr = subString[0];
    let count = 1;
    let encounteredOpposite = false;
    let firstChar = subString[0];
    for (let i = 1; i < subString.length; i++) {
      if (subString[i] === firstChar) {
        if (!encounteredOpposite) {
          count++;
          goodSubStr += subString[i];
        } else {
          return;
        }
      } else {
        encounteredOpposite = true;
        count--;
        goodSubStr += subString[i];
        if (count === 0) {
          results.push(goodSubStr);
          return;
        }
      }
    }

  }

  for (let i = 0; i < string.length; i++) {
    process(string.slice(i))
  }
  return results.length;
}

let input;
// test 1
input = '001101';
console.log(countSubstring(input));

// test 2
input = '0001100011100';
console.log(countSubstring(input));
