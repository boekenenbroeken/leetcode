/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  const value = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, value);

  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
    this.cache.set(key, value);
  } else if (this.cache.size === this.capacity) {
    const [firstKey] = this.cache.keys();
    this.cache.delete(firstKey);
    this.cache.set(key, value);
  } else {
    this.cache.set(key, value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
