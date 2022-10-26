/**
 * @param {string} s
 * @return {string}
 */

//  Input: string
// Output: string
// C: none
// E: string of length 1, several substring that are also palindromes,
// E: multiple palindromes of same length? return the first one

// Strategy 1: iterate through each character of string, for each character, iterate through the rest of the string to see what the longest substring could be
// how we'll check for palindrome
  //we'll have 3 pointers
  // pointer 1 STAYS at the current character in the iteration, the second pointer will start at the end of string.
  // pointer 2 starts where pointer 1 is
  // the second pointer will iterate from right to left, if pointer 2 and 3 match, both pointers will move one step towards the middle
  // if pointer 2 and 3 don't match, pointer 3 will move left, pointer 2 will go back to where pointer 1 was to reset
  // this inner iteration will stop when pointer 2 and pointer 3 meets
// time O(n^2)
// optimization: skip any iteration where the potential max length is already shorter than the current optimal solution

// handle odd length palindromes

// pseudocode:
// init longestPalie
// iterate through characters of s
  // init leftString, rightString
  // init pointer 2 (current index) and 3 (last index)
  // start while loop, while pointer 2 is still to the left of 3
    // if value of pointer 2 and pointer 3 matches
      //add to leftString, add to rightString
      // increment pointer 2
      // decrement pointer 3
    // else (that means this is not a valid palindrome)
      // reset leftString, rightString
      // note: we don't want to decrement pointer 3 if pointer 2 was reset, because we need to check this case again
      //if pointer1 is equal to pointer2
        //decrement pointer3
      // else
        //reset pointer2 to current index (pointer1), but keep pointer3 so we can check it again with the first element (pointer1)
  // after the while loop
  // if pointer 2 and pointer 3 are at the same index, then this was an odd number of characters,
    //the palindrome will be leftString + middleCharacter + rightString
  //else pointer 2 will be to the right of pointer 3
    //the palindrome will be leftString + rightString
  // update the longestPalie
// return longestPalie
var longestPalindrome = function(s) {
  let longestPalie = '';
  // iterate through each letter
  for (let pointer1 = 0; pointer1 < s.length; pointer1++) {
    let leftString = '';
    let rightString = '';
    let pointer2 = pointer1;
    let pointer3 = s.length - 1;
    let palindrome = '';
    // look for palindrome that starts with pointer 1's value
    while (pointer2 < pointer3) {
      if (s[pointer2] === s[pointer3]) {
        leftString = leftString + s[pointer2];
        rightString = s[pointer2] + rightString;
        pointer2++;
        pointer3--;
      } else {
        // resetting pointers and substrings
        leftString = '';
        rightString = '';
        if (pointer1 === pointer2) {
          pointer3--;
        } else {
          pointer2 = pointer1;
        }
      }
    }
    // handle odd vs even number of characters in palindrome
    if (pointer2 === pointer3) {
      palindrome = leftString + s[pointer2] + rightString;
    } else {
      palindrome = leftString + rightString;
    }
    console.log('start index ', pointer1, ' palindrome: ', palindrome)
    if (palindrome.length > longestPalie.length) longestPalie = palindrome;
  }
  return longestPalie;
};

// Strategy above does not work for "xaabacxcabaaxcabaax" because it pointer 3 had to be reset back out to the 3rd x but it was "stuck" on the second x

// Strategy 2: cubic time,
// iterate through each character
  //iterate through each character backwards to check every possible substring
    //iterate through each substring using the helper function, which is the first iteration that didn't work (see above)

// very slow, high time complexity, beat 5% in time, 6282 ms
// var longestPalindrome = function(s) {
//   let longestPalie = '';
//   const isPalindrome = (string) => {
//     let leftPointer = 0;
//     let rightPointer = string.length - 1;
//     while (leftPointer < rightPointer) {
//       if (string[leftPointer] !== string[rightPointer]) return false
//       leftPointer++;
//       rightPointer--;
//     }
//     return true;
//   }
//   for (let pointer1 = 0; pointer1 < s.length; pointer1++) {
//     for (let pointer2 = s.length; pointer2 > pointer1; pointer2--) {
//       let substring = s.slice(pointer1, pointer2)
//       if (isPalindrome(substring) && substring.length > longestPalie.length) longestPalie = substring
//     }
//   }
//   return longestPalie;
// };

// with optimization, beat 21%, 808 ms
var longestPalindrome = function(s) {
  let longestPalie = '';
  const isPalindrome = (string) => {
    let leftPointer = 0;
    let rightPointer = string.length - 1;
    while (leftPointer < rightPointer) {
      if (string[leftPointer] !== string[rightPointer]) return false
      leftPointer++;
      rightPointer--;
    }
    return true;
  }
  for (let pointer1 = 0; pointer1 < s.length; pointer1++) {
    if (s.length - pointer1 < longestPalie.length) break;
    for (let pointer2 = s.length; pointer2 > pointer1; pointer2--) {
      if (pointer2 - pointer1 <= longestPalie.length) break;
      let substring = s.slice(pointer1, pointer2)
      if (isPalindrome(substring) && substring.length > longestPalie.length) longestPalie = substring
    }
  }
  return longestPalie;
};