/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// Strategy: store the count of trustee in a hashmap, if it ever reaches n - 1, return true;
var findJudge = function(n, trust) {
  if (n === 1) return 1;
  let hashmap = {};
  for (let relationship of trust) {
    hashmap[relationship[1]] = (hashmap[relationship[1]] || 0) + 1;
    hashmap[relationship[0]] = (hashmap[relationship[0]] || 0) - 1;
  }

  for (const key in hashmap) {
    if (hashmap[key] === n - 1) return key;
  }
  return -1

};