/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
  let seen = new Set();
  let count = 0;
  const processRow = (rowIndex) => {
    let row = isConnected[rowIndex]
    for (let i = 0; i < row.length; i++) {
      if (row[i] === 1) {
        if (!seen.has(i)) {
          seen.add(i);
          processRow(i);
        }
      }
    }
  }
  for (let row = 0; row < isConnected.length; row++) {
    if (!seen.has(row)) {
      count++;
      processRow(row);
    }
  }
  return count;
};