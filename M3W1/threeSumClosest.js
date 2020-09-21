 var threeSumClosest = function(nums, target) {
 nums.sort((a,b) => a - b)
  minDelta = Infinity
  let m
  let low
  let high
  let sum
  let candidate
  for( let i = 0; i < nums.length - 1; i++){
    m = nums[i]
    low = i + 1
    high = nums.length - 1
    
    delta = sum - target
   
    while(low < high){
      sum = nums[low] + m + nums[high]
       if( sum == target) return sum
      if( Math.abs(sum - target) <= minDelta){
        minDelta = Math.abs(sum - target)
        candidate = sum
      }
      if( sum < target){
        low++
      }else{
        high--
      }
    }
    
  }
  return candidate
  
};
