var climbStairs = function(n) {
  let steps = [0, 1, 2];

  if (n <= 2) {
      return steps[n];
  }

  let current = 3;
  while (current <= n) {
      steps.push(steps[steps.length - 1] + steps[steps.length - 2]);
      current += 1;
  }

  return steps[steps.length - 1];
};