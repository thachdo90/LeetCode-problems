/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// I: 2 strings
// O: boolean
// C:
// E:


// strategy: create a hashmap of s1, then iterate through s2 and compare against this hashmap
// time: O(n + m) total number of characters in s1 and s2
// two permutations are equal if they have the same hashmap (of counts of letters)

// strategy: use a sliding window on s2, with pointer1 and pointer2
// move pointer2 forward
  // if it's a needed char, store it in hashmap2
  // if not, pointer1 moves up to pointer2 to start over
  // if it is a needed char but that pushes the char over the char count, called this excess, then p1 will move up to the next excess count
  // if the hashmap is ever complete, return true
  var checkInclusion = function(s1, s2) {
    let hashmap = {uniqueCount:0};
    for (let char of s1) {
      if (hashmap[char] === undefined) {
        hashmap[char] = 1;
        hashmap.uniqueCount++;
      } else {
        hashmap[char]++;
      }
    }
    let hashmap2 = JSON.parse(JSON.stringify(hashmap));
    let p1 = -1;
    let p2 = 0;
    while (p2 < s2.length) {
      let char = s2[p2]
      if (hashmap2[char] !== undefined) {
        hashmap2[char]--;
        if(hashmap2[char] === 0) {
          hashmap2.uniqueCount--;
          if (hashmap2.uniqueCount === 0) return true;
        } else if (hashmap2[char] < 0) {
          do {
            p1++;
            if (hashmap2[s2[p1]] === 0) hashmap2.uniqueCount++;
            hashmap2[s2[p1]]++;
          }
          while (s2[p1] !== char);
        }
      } else {
        p1 = p2;
        hashmap2 = JSON.parse(JSON.stringify(hashmap));
      }
      p2++;
    }
    return false;
  };