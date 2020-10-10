var bSrchPos = ( dp, target, hi) => {
  let lo = 0
  while( lo <= hi){
    let m = Math.floor((lo + hi) / 2)
    if( target === dp[m]) 
      return m
    else if (target < dp[m]) 
      hi = m - 1
    else 
      lo = m + 1
  }
  return lo
}

var lengthOfLIS = function(nums) {
    if( nums.length < 2)
      return nums.length
   
  let dp = new Array( nums.length).fill(Infinity)
  
  for ( let i = 0; i < nums.length; i++){
    let pos = bSrchPos( dp, nums[i], i)
    dp[pos] = nums[i]
  }
 let i = nums.length - 1 
 while( dp[i] == Infinity ) i--
 return i + 1
  
};
