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

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// Strategy: store the count of trustee in a hashmap, if it ever reaches n - 1, return true;
var findJudge = function(n, trust) {
  if (n === 1) return 1;
  let hashmap = {};
  let untrusted = new Set();
  let trustable = [];
  for (let relationship of trust) {
    hashmap[relationship[1]] = (hashmap[relationship[1]] || 0) + 1;
    if (hashmap[relationship[1]] === n - 1) trustable.push(relationship[1])
    untrusted.add(relationship[0]);
  }
  for (let person of trustable) {
    if (!untrusted.has(person)) return person;
  }
  return -1

};