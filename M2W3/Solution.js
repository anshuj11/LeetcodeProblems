/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
   //return this.nums
   let res = [] 
   for(let i = 0; i < this.nums.length; i++){
     let ind = (Math.floor(Math.random()*1000))%this.nums.length
     while(res[ind] !== undefined)
       ind = (Math.floor(Math.random()*1000))%this.nums.length
     res[ind] = this.nums[i]
   } 
   return res 
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
