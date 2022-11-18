/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
  const distance = (x, y) => (x**2 + y**2) ** (1/2);
  points.sort((a, b) => distance(a[0], a[1]) - distance(b[0], b[1]))
  return points.slice(0, k);

};