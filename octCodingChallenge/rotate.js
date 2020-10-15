var rotate = function(nums, k) {
    k = k % nums.length
    k = nums.length - k
   while( k > 0){
     temp = nums.shift()
     nums.push(temp)
     k--
   }
  
};
