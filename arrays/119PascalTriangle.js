/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
  let currentRow = [1]
  let currentIndex = 0;
  if (rowIndex === 0) return currentRow;
  while (currentIndex < rowIndex) {
    let newRow = [];
    for (let i = 0; i <= currentRow.length; i++) {
      let newValue = (currentRow[i - 1] || 0) + (currentRow[i] || 0);
      newRow.push(newValue)
    }
    currentRow = newRow;
    currentIndex++;
  }
  return currentRow;
};