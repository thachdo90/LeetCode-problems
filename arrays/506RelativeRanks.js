/**
 * @param {number[]} score
 * @return {string[]}
 */
// I: array of ints
// O: array of strings
// C: none
// E: array length is <= 3;

// strategy: sort score array, O(logn) time
// iterate through sorted array and assign a ranking to that score
// iterate through unsorted score array and look up its ranking
var findRelativeRanks = function(score) {
  let sortedScore = score.slice().sort((a,b) => b - a);
  let rankingMap = {};
  for (let i = 0; i < 3; i++) {
    let ranking;
    if (i === 0) {
      ranking = 'Gold Medal';
    } else if (i === 1) {
      ranking = 'Silver Medal';
    } else if (i === 2) {
      ranking = 'Bronze Medal';
    }
    rankingMap[sortedScore[i]] = ranking;
  }
  for (let i = 3; i < sortedScore.length; i++) {
  let ranking = (i + 1) + '';
  rankingMap[sortedScore[i]] = ranking;
  }
  let results = [];
  for (let item of score) {
    results.push(rankingMap[item])
  }
  return results
};