/**
 * @param {number[][]} intervals
 * @return {number}
 */

// I: array of array (tuples)
// O: int, representing the min of arrays to remove
// C:
// E: none overlapping return 0,

// idea: group connect intervals together and remove the largest?
// Idea: sort tuples by ascending start time, if start time is equal, sort by asending end time
// As we iterate, compare each interval to the previous, if it overlap, we always want to remove it
// Investigate: Is this always true? Do we ever want to keep the previous instead of the current when the two overlap?
// quick logical proof:
// previous will always be isolated because we're always iterating
// removing previous to keep the current interval will AT BEST keep the same result (1 interval saved), but because the current interval has potential to overlap with the next one, the result could now be worst off, so we always want to keep the previous and get rid of the current
// time: O(nlogn + n) from sorting then iterating
// didn't work when current interval is a subset of previous interval
// Try: in this case, we want to keep the smaller subinterval
var eraseOverlapIntervals = function(intervals) {
  // let results = new Set();
  // for (let interval of intervals) {
  //   results.add(interval[0]);
  //   results.add(interval[1])
  // }
  // console.log(Array.from(results).sort((a, b) => a - b))

  let count = 0;
  let previousInterval;

  intervals.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  previousInterval = intervals[0];
  console.log(intervals)
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i]
    // "delete" current interval if it overlaps with previous
    if (interval[0] < previousInterval[1]) {
      count++;
      if (interval[1] < previousInterval[1]) previousInterval = interval;
    } else {
      previousInterval = interval;
    }
  }
  return count;
};