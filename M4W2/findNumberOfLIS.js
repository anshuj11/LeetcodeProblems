/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    if(nums.length < 2)
      return nums.length
  
  let dp = new Array( nums.length).fill(1);
  let cA = new Array( nums.length).fill(1);
  
  let max = 0;
  for( let i = 1; i < nums.length; i++){
    
    for( let j = 0; j < i; j++ ){
       
      if( nums[i] > nums[j]){
        if( dp[j] + 1 > dp[i]){
          dp[i] = dp[j] + 1
          cA[i] = cA[j]
        }else if( dp[j] + 1 == dp[i]){
          cA[i] += cA[j]
        }
      }
    }
    max = Math.max( max, dp[i])
  }
  
  let res = 0
  for( let i = 0; i < cA.length; i++){
    if( dp[i] === max)
      res += cA[i]
  }
  
  return res
};
