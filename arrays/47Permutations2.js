/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  let results = [];
  let records = new Set();
  const process = (currentArray, remainingArray) => {
    if (remainingArray.length === 0) {
      let arrayString = JSON.stringify(currentArray);
      if (!records.has(arrayString)) {
        results.push(currentArray);
        records.add(arrayString);
      }
    } else {
      for (let i = 0; i < remainingArray.length; i++) {
        let newArray = currentArray.slice();
        newArray.push(remainingArray[i])
        let newRemainder = remainingArray.slice(0, i).concat(remainingArray.slice(i + 1, remainingArray.length))
        process(newArray, newRemainder)
      }
    }
  }
  process([], nums);
  return results;
};