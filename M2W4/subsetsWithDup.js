var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a - b) 
  let prev = 0
  
  let res = [[]]
  for(let i = 0; i < nums.length; i++){
    let l = res.length;
    for(let j = prev; j < l; j++)
      res.push([...res[j], nums[i]])
    if(nums[i] == nums[i+1])
      prev = l
    else
      prev = 0
  }
  return res
    
};
