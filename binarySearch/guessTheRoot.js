// Given a non-negative integer n, find a number r such that r * r = n and round down to the nearest integer.

// Can you implement this without using the built-in square root?

const solve = (n) => {
  let diff = Math.floor(n / 2);
  let current = n;
  while (diff >= 1) {
      if (current ** 2 > n) {
          current -= diff
      } else if (current ** 2 < n) {
          current += diff
      } else {
          return current;
      }
      diff = Math.floor(diff / 2);
  }
  if (current ** 2 < n) {
      let nextNumDiff = Math.abs((current + 1) ** 2 - n)
      let currentDiff = Math.abs(current ** 2 - n)
      return currentDiff <= nextNumDiff ? current : current + 1;
  } else {
      let prevNumDiff = Math.abs((current - 1) ** 2 - n)
      let currentDiff = Math.abs(current ** 2 - n)
      return currentDiff <= prevNumDiff ? current : current - 1;
  }
}

// for testing purposes
// for (let i = 0; i <= 50; i++) {
//   console.log('root of ', i, 'is ', solve(i), 'sqrt is', Math.sqrt(i))
// }