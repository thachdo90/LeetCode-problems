// I: array of tuples indicating edges
// O: numeric value, min degree in trio, or -1 if no trio
// C: none, no repeated edges
// E: n = 2
// strategy: iterate through list and record edges onto an object
// challenge: when nodes are members of multiple trios
// storage = {
//   nodeValue: {
//     inTrio: true/false
//     connection: [node1, node2, node3]
//   }
// }
// edges = {node: {connection: [node1, node2, node3]}} indicates that node is connected to node1, node2, node3
// a trio can be found if we start at a node traverse its connected node and get back to the original node in exactly 3 steps
console.log([1,2,3].includes(1))

const minDegree = (edges) => {
  let storage = {};

  const inTrio = (originalNode, nodeValue = originalNode, steps = 3) => {
    console.log(originalNode, nodeValue, steps)
    if (steps === 1) {
      let trioComplete = storage[nodeValue].connection.includes(originalNode);
      console.log('is ', originalNode, ' in ', storage[nodeValue].connection);
      console.log('trio complete? ', trioComplete)
      return trioComplete;
    } else {
      for (let connectedNode of storage[nodeValue].connection) {
        if(inTrio(originalNode, connectedNode, steps - 1)) {
          storage[originalNode].inTrio = true;
        }
      }
    }
  }

  for (let pairs of edges) {
    let a = pairs[0];
    let b = pairs[1];
    if (storage[a]) {
      storage[a].connection.push(b)
    } else {
      storage[a] = {
        inTrio: false,
        connection: [b]
      }
    }
    if (storage[b]) {
      storage[b].connection.push(a)
    } else {
      storage[b] = {
        inTrio: false,
        connection: [a]
      }
    }
  }
  console.log(storage);
  for (let value in storage) {
    inTrio(parseInt(value));
  }
  console.log(storage);

}


// test cases:
let n, edges, result;
// Test 1:
n = 6;
edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]
result = minDegree(edges);
if (result === 3) {
  console.log('test passed')
} else {
  console.log('test failed: expected ', 3, ' but got ', result);
}

// test 2:
// n = 7;
// edges = [[1,3], [4,1], [4,3], [2,5], [5,6], [6,7], [7,5], [2,6]];

// result = minDegree(edges);
// if (result === 0) {
//   console.log('test passed')
// } else {
//   console.log('test failed: expected ', 0, ' but got ', result);
// }