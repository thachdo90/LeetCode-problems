/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// I: two strings
// O: array of indices
// C:
// E: p is longer than s
// strategy: use a sliding window and hashmap to keep track
// iterate through p first to get a hashmap count of the end goal
// set up a window on s, then start sliding that window and store letters in a second hashmap, we'll know it's a match when
var findAnagrams = function(s, p) {
  let results = [];
  if (p.length > s.length) return results;
  let hashmap = {uniqueCount: 0};
  for (let char of p) {
    if (hashmap[char] !== undefined) {
      hashmap[char] += 1;
    } else {
      hashmap[char] = 1;
      hashmap.uniqueCount++;
    }
  }
  // console.log(hashmap)
  let p1 = 0;
  let p2 = 0;
  let storage = JSON.parse(JSON.stringify(hashmap));
  while (p2 < s.length) {
    if (storage[s[p2]] === undefined) {
      while (storage[s[p2]] === undefined) {
        p2++;
        if (p2 >= s.length) return results;
      }
      p1 = p2;
      storage = JSON.parse(JSON.stringify(hashmap));
    }
    storage[s[p2]]--;
    if (storage[s[p2]] === 0) {
      storage.uniqueCount--;
      if (storage.uniqueCount === 0) results.push(p1);
    } else if (storage[s[p2]] < 0) {
      while (s[p1] !== s[p2]) {
        if (storage[s[p1]] === 0) storage.uniqueCount++;
        storage[s[p1]]++;
        p1++;
      }
      storage[s[p1]]++;
      p1++;
      if (storage.uniqueCount === 0) results.push(p1);
    }
    p2++;
  }
  return results;
};