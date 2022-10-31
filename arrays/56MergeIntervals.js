/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// I: array of arrays (tuples)
// O: array of tuples
// C:
// E:

// strategy: sort array based on start time O(nlogn)
// iterate: through tuples, if current start time is less than or equal to previous start time, modify the previous end time with the current end time
var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])
  let results = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let current = intervals[i];
    let previous = results[results.length - 1];
    if (current[0] <= previous[1]) {
      previous[1] = Math.max(current[1], previous[1]);
    } else {
      results.push(current)
    }
  }
  return results;
};