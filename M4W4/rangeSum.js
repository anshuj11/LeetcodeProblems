var rangeSum = function(nums, n, left, right) {
  
  let res = []
   for ( let i = 0; i < nums.length; i++) {
     let subArrSum = 0;
     for ( let j = i; j < nums.length; j++) {
       subArrSum += nums[j]
       res.push(subArrSum)
     }
   }
  
  res.sort((a,b) => ( a - b))
  
  let sum = 0;
  for( let i = left - 1; i < right; i++)
    sum += res[i]
  
  let mod = Math.pow(10, 9) + 7
  
  return (sum % mod)
};
