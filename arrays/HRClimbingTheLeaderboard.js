/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

// Output: array of rankings for each new score
// C: ranked board is descending order, player scores are ascending order
// E: repeated values in player scores
// strategy: iterate through player array, for each item, iterate through ranked array to find place
// time complexity O(m*n), could try to achieve O(m) + O(2n) by iterating through both arrays simultaneously, forward on the ranked and backways on the player

// init rankedPointer pointing to first element of ranked
// init playerPointer point to last element of player
// init ranking at 1
// init rankings []

// while loop, until playerPointer gets to 0
  //compare ranked value to player value
  //if player value is greater than or equal to ranked value or if rankedPointer reached the end
    //record current ranking to rankings
    //decrement playerPointer (to advance it left)
  //else
    //increment rankedPointer (to move it right)
    //if current value is less than previous value (increase ranking)
// reverse rankings array and return it
function climbingLeaderboard(ranked, player) {
  let rankedPointer = 0;
  let playerPointer = player.length - 1;
  let ranking = 1;
  let rankings = [];
  while (playerPointer >= 0) {
      if (rankedPointer === ranked.length - 1) {
          if (player[playerPointer] < ranked[rankedPointer]) {
              rankings.push(ranking + 1);
          } else {
              rankings.push(ranking)
          }
          playerPointer--;
      } else if (player[playerPointer] >= ranked[rankedPointer]) {
          rankings.push(ranking)
          playerPointer--;
      } else {
          rankedPointer++;
          if (ranked[rankedPointer] < ranked[rankedPointer - 1]) ranking++;
      }
  }
  rankings.reverse();
  return rankings;
}