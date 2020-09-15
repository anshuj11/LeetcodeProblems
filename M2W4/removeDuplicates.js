var removeDuplicates = function(nums) {
    let dup_cnt = 0
    let ptr = []
    let length = nums.length;
    for( let i=2; i <= length; ){
       if( nums[i] == nums[i-1] && nums[i] == nums[i - 2]){
           nums.splice(i,1)
           length--
       }else{
           i++;
       }
        
    }
    return length+1
};
