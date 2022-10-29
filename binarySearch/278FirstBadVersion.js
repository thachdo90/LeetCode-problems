/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// I: int (n versions)
// O: int (first bad)
// C: ?
// E: n = 1 or 2

// strategy: binary search
// have lower bound = 1 and upper bound = n
// get the middle index, check if that's bad
// if it is, assign that as the new upper bound
// it it's not, assign that as the new lower bound
// do this until the upperbound is one away from the lower bound
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let LB = 1;
    let UB = n;
    let mid;
    if (isBadVersion(LB)) UB = LB
    while (LB < UB - 1) {
      mid = Math.floor((LB + UB) / 2)
      if (isBadVersion(mid)) {
        UB = mid;
      } else {
        LB = mid;
      }
    }
    return UB
  };
};