/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// strategy: recursion, could be optimized with memoization
var allPathsSourceTarget = function(graph) {
  let goal = graph.length - 1;
  let paths = [];

  const process = (currentPath, number) => {
    for (let item of graph[number]) {
      let newPath = currentPath.slice();
      newPath.push(item);
      if (item === goal) {
        paths.push(newPath);
      } else {
        process(newPath, item);
      }
    }
  }

  process([0], 0);
  return paths;
};