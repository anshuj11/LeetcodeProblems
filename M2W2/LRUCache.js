var LRUCache = function(capacity) {
    this.l = new Map;
    this.capacity = capacity;
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.l.get(key)
    if(val === undefined) return -1
    delete this.l.delete(key)
    this.l.set(key, val);
    
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.l.has(key))
       this.l.delete(key)
    this.l.set(key, value)
    
    if (this.l.size > this.capacity ){
       let keys = this.l.keys() 
       this.l.delete(keys.next().value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
