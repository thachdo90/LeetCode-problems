/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  generate mapping to record all mapping
// iterate through both strings simultaneously
// at each element in s, check to see if it already exists in the mapping,
  // if it does, it should match the element in t
  // if not, create a new mapping
// check for many to one relationship, many elements in s mapping to same character in t
// check this by iterating through values of object and seeing if there are duplicates
  // use set and compare lengths
  var isIsomorphic = function(s, t) {
    let mapping = {};
    for (let i = 0; i < s.length; i++) {
        if (mapping[s[i]]) {
            if (mapping[s[i]] !== t[i]) {
                return false;
            }
        } else {
            mapping[s[i]] = t[i];
        }
    }
    let tMappings = Object.values(mapping);
    let distinctMappings = new Set(tMappings);
    return tMappings.length === distinctMappings.size;

};