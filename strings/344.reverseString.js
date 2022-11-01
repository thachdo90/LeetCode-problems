var reverseString = function(s) {
  let p1 = 0;
  let p2 = s.length - 1;
  while (p1 < p2) {
    [s[p1], s[p2]] = [s[p2], s[p1]]
    p1++;
    p2--;
  }
};