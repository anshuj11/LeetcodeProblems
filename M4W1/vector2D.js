/**
 * @param {number[][]} v
 */
var Vector2D = function(v) {
    this.ptr = 0;
    this.arr = [];
  
   for( let i = 0; i < v.length; i++)
     this.arr.push(...v[i])
};

/**
 * @return {number}
 */
Vector2D.prototype.next = function() {
  if(this.ptr < this.arr.length)
    this.ptr++
  return(this.arr[this.ptr - 1])
};

/**
 * @return {boolean}
 */
Vector2D.prototype.hasNext = function() {
 if(this.ptr < this.arr.length)
   return true
 return false 
};

/** 
 * Your Vector2D object will be instantiated and called as such:
 * var obj = new Vector2D(v)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
