/**
 * @param {number[][]} points
 * @return {number}
 */
// I: Matrix (array of tupples) where tuple = coordinate
// O: int (max area) or 0 if not possible
// C: points are unique
// E: no rectangle can be made,

// subproblem: how do we identify a rectangle as we traverse the array?

// time complexity, at least O(N) to traverse array
// idea: iterate through array, store values in object, somehow group these points into possible rectangles and update a min area
// observation: from any given point, we can look for a next corner in two possible ways, look vertically (same x) or look horizontally (same y), if we keep doing this and get back to the original coordinate in 4 steps (the 4 sides of a rect), then it forms a rectangle

// idea: create two hashmaps, one to store x values, another to store y-values
// scan through the x's, for each pair, look up the y values to see if it forms a rectangle
// maybe we only need an X-hashmap, where the values will be the y-values, then we can find a rectangle
// solved subproblem (identifying a rectangle): given any two x-values on the hashmap, if there are two matching y=values, that forms a rectangle, this is a lot of combinations to process though so we need a strategy that's better than brute force to efficiently find combinations of coordinates that make up rectangle

// subproblem 2: how do we efficiently check possible combinations for rectangle. If we can solve this problem, then updating the min area will be easy
// any x-values with only one 1-y is not considered

// summary of strategy with high time complexity
// iterate through array and generate an object with keys as x coordinates and values as array of corresponding y-coordinates
// check every possible pair of x values
  //check look for 2 pairs of matching y-values

// ways to optimize: ignore x's that only have 1 y-value
// somehow disregard cases that are already bigger than current optimal solution
var minAreaRect = function(points) {
  let coordinates = {};
  for (let point of points) {
    let x = point[0];
    let y = point[1];
    if (!coordinates[x]) coordinates[x] = new Set();
    coordinates[x].add(y);
  }
  let validXs = [];
  for (const [key, value] of Object.entries(coordinates)) {
    if (value.size > 1) {
      validXs.push(parseInt(key));
    }
  }
  let minArea = Infinity;
  const calcRectWith = (x1, x2) => {
    let width = Math.abs(x1 - x2);
    let yValues = Array.from(coordinates[x1]);
    for (let pointer1 = 0; pointer1 < yValues.length - 1; pointer1++) {
      for (let pointer2 = pointer1 + 1; pointer2 < yValues.length; pointer2++) {
        let y1 = yValues[pointer1];
        let y2 = yValues[pointer2];
        if (coordinates[x2].has(y1) && coordinates[x2].has(y2)) {
          let height = Math.abs(y1 - y2);
          let area = width * height;
          minArea = Math.min(minArea, area);
        }
      }
    }
  }
  for (let pointer1 = 0; pointer1 < validXs.length - 1; pointer1++) {
    for (let pointer2 = pointer1 + 1; pointer2 < validXs.length; pointer2++) {
      let x1 = validXs[pointer1];
      let x2 = validXs[pointer2];
      calcRectWith(x1, x2);
    }
  }
  return minArea === Infinity ? 0 : minArea;
};