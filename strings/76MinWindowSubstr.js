var minWindow = function(s, t) {
  let storage = {allZero: 0};
  let shortestSubstring;
  let p1 = 0;
  let p2;
  // Get a count of characters in t
  for (let char of t) {
    if (storage[char] === undefined) {
      storage.allZero++;
      storage[char] = 1;
    } else {
      storage[char]++;
    }
  }

  // find starting place
  while (storage[s[p1]] === undefined) {
    p1++;
    if (p1 === s.length) return shortestSubstring || '';
  }
  p2 = p1 - 1;
  // getting the first valid window
  while (storage.allZero !== 0) {
    p2++;
    if (p2 === s.length) return shortestSubstring || '';
    if (storage[s[p2]] !== undefined) {
      storage[s[p2]]--;
      if (storage[s[p2]] === 0) storage.allZero--;
    }
  }
  // debugger;
  let subStr = s.slice(p1, p2 + 1);
  // console.log(subStr);
  if (shortestSubstring === undefined || subStr.length < shortestSubstring.length) shortestSubstring = subStr;

  // moving the window
  while (p2 < s.length) {
    // losing current letter at p1 to move window forward
    let letterLost = s[p1];
    storage[letterLost]++;
    if (storage[letterLost] > 0) storage.allZero++;
    p1++;
    while (storage[s[p1]] === undefined) {
      if (p1 === s.length) return shortestSubstring || '';
      p1++;
    }
    // finding the lost letter
    // debugger;
    if (storage.allZero > 0) {
      p2++;
      while (s[p2] !== letterLost) {
        if (p2 === s.length) return shortestSubstring || '';
        if (storage[s[p2]] !== undefined) {
          storage[s[p2]]--;
          if (storage[s[p2]] === 0) storage.allZero--;
        }
        p2++
      }
      storage[s[p2]]--;
      storage.allZero--;
    }
    subStr = s.slice(p1, p2 + 1);
    // console.log(subStr);
    if (shortestSubstring === undefined || subStr.length < shortestSubstring.length) shortestSubstring = subStr;
  }
  return shortestSubstring || '';
};