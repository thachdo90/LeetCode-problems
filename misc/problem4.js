// I: numeric value (number of trees)
// I: numeric value (number of days) 
// I: array (tree heights)
// O: YES # or NO
// C: none
// E: negative heights, trees already ordered

// DP task: decide to keep or change height of each tree
// observations: strictly increasing doesn't necessarily have to be one unit in difference
// observation: we can iterate through the array, at each element, calculate the number of days to get ALL elements to be the same height. This will be the benchmark. From here, we can solve the next task: calculate the number of days it'll take to make trees increase given that they're all the same height
// Observation: we can use one element as the anchor, and calculate the moves it'll take to change the OTHER trees. This means we can calculate the optimal solutions to these subproblems
// subproblem: at the ends, sometimes we don't have to change them because they're already the extremes

// this is a hard one, ran out of time (40 mins)
// DP problem