var numIdenticalPairs = function(nums) {
    let m = {}
    let res = 0;
    for( let i = 0 ; i <nums.length ; i++){
      if(m[nums[i]] == undefined ){
        m[nums[i]] = 1
      }else{
        res += m[nums[i]]
        m[nums[i]] += 1
      }
    }
    return res
};
