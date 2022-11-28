/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
// I: two arrays of tuples
// O: array of tuples
// C:
// E:
// Strategy: have two pointers iterating through the two arrays
// at each element, compare the two element and generate any intersections, the pointer with the smaller endpoint advances
var intervalIntersection = function(firstList, secondList) {
  let results = [];
  let p1 = 0;
  let p2 = 0;
  while (p1 < firstList.length && p2 < secondList.length) {
    let item1 = firstList[p1];
    let item2 = secondList[p2];
    let min = Math.max(item1[0], item2[0]);
    let max = Math.min(item1[1], item2[1]);
    if (min <= max) {
      results.push([min, max]);
    }
    if (item1[1] <= item2[1]) {
      p1++;
    } else {
      p2++;
    }
  }
  return results;


};