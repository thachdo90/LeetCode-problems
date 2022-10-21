// all methods have O(1) time complexity, except for getRandom, because that involves generating an array, which requires O(n) time where n is the current size of the storage
var RandomizedSet = function() {
  this.storage = new Set();
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.storage.has(val)) {
      return false;
  } else {
      this.storage.add(val);
      return true;
  }
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  return this.storage.delete(val);
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let array = Array.from(this.storage);
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
  
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/