/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
 var maxSatisfied = function(customers, grumpy, minutes) {
  // handle cases where length <= minutes separately
  // declare maxSalvage as the amount of customers saved in that first window
      // salvageable = total customers that arrive when grumpy
  // iterate through array with 2 pointers to create a window
  // move sliding window down, recalculate salvageable customers, update maxSalvage if possible
  // at each iteration, calculate the total satisfied customers
  // return total satisfied + maxSalvage
  let pointer1 = 0;
  let pointer2 = 0;
  let maxSalvaged = 0;
  let currentSalvaged = 0;
  let satisfiedCustomers = 0;
  while (pointer2 < customers.length) {
      if (grumpy[pointer2] === 0) {
          satisfiedCustomers += customers[pointer2];
      } else {
          currentSalvaged += customers[pointer2];
      }
      if (pointer2 - pointer1 > minutes - 1) {
          if (grumpy[pointer1] === 1) {
              currentSalvaged -= customers[pointer1];
          }
          pointer1++;
      }
      maxSalvaged = Math.max(maxSalvaged, currentSalvaged);
      pointer2++;
  }
  return satisfiedCustomers + maxSalvaged;
};