// I: k = # of continguous sections, profit = array of profits
// O: numeric value, max profit
// C: none
// E: profits are all negative, k === half length of array
// observation: what's considered opposite sections will change based on the size of the circle, opposite of i is i + array.length / 2, given that i < array.length/2
// obs: can use modulo operator to cycle through array
// strategy: sliding window
// have two pointers calculate the sum of the continguous regions and its opposite, slide this window through the first half of the array (less than array.length /2)
// update highestProfit;

// initiate highestProfit;
// initiate 2 pointers (left and right) at first element, move right pointer (k - 1) steps to get a contiguous piece of k elements
// at each step, calculate the currentProfit
// while right pointer is less than half lenth of array
// move both pointers up
// recalculate currentProfit
// update highestProfit;

const maxProfit = (k, profit) => {
  let halfLength = profit.length / 2;
  let highestProfit;
  let leftPointer = rightPointer = 0;
  // setting up window of k size
  let currentProfit;
  while (rightPointer < k) {
    currentProfit = (currentProfit || 0) + profit[rightPointer] + profit[rightPointer + halfLength];
    rightPointer++;
  }
  highestProfit = currentProfit;
  rightPointer--;
  // console.log(highestProfit);
  // moving window forward
  while (rightPointer < profit.length - 1) {
    currentProfit -= (profit[leftPointer] + profit[(leftPointer + halfLength) % profit.length]);
    leftPointer++;

    rightPointer++;
    currentProfit += (profit[rightPointer] + profit[(rightPointer + halfLength) % profit.length]);
    highestProfit = Math.max(highestProfit, currentProfit)
  }
  return highestProfit;
}


let k, profit;
// TEST 1
k = 2
profit = [1, 5, 1, 3, 7, -3]
console.log(maxProfit(k, profit), ' should be ', 16)

// TEST 2
k = 1
profit = [3, -5]
console.log(maxProfit(k, profit), ' should be ', -2)

// TEST 3
k = 3
profit = [0, 8, 9, 10, 0, 0, 0, 0, 0, 0];
console.log(maxProfit(k, profit), ' should be ', 27)

// TEST 4
k = 4
profit = [0, 8, 9, 10, -10, -9, -8, 1];
console.log(maxProfit(k, profit), ' should be ', 1)

// TEST 5
k = 4
profit = [0, 8, -1000, 9, 10, -10, -9, -1000, -8, 1];
console.log(maxProfit(k, profit), ' should be ', 1)