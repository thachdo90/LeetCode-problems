/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findSmallestSetOfVertices = function(n, edges) {
  let fromVertices = new Set();
  let toVertices = new Set();
  for (let edge of edges) {
    let fromVertex = edge[0];
    let toVertex = edge[1];
    if (fromVertices.has(toVertex)) {
      fromVertices.delete(toVertex)
      toVertices.add(toVertex);
    }
    if (!toVertices.has(fromVertex)) fromVertices.add(fromVertex);
    toVertices.add(toVertex);
  }
  return Array.from(fromVertices);

};