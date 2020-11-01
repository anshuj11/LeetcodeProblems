var nextGreaterElements = function(nums) {
    let res = []
    for( let i = 0; i < nums.length; i++){
      for(let j = i+1; j < nums.length; j++){
        if(nums[j] > nums[i]){
          res.push(nums[j])
          break;
        }
      }
      if(res[i] == undefined){
        for(let j = 0; j < i; j++){
          if(nums[j] > nums[i]){
            res.push(nums[j])
            break;
          }
        }
      }
      if( res[i] == undefined)
        res.push( -1 )
    }
  return res
};
