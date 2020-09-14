var rob = function(nums) {
    let sum = 0;
    
    const helper = ( i, memo = {} ) =>{
        if( memo[i] !== undefined ) return memo[i]
        if(i >= nums.length ){
            memo[i] = 0
            return 0
        }if(i === nums.length - 1){
            memo[i] = nums[i]
            return nums[i]
        }
        memo[i] = Math.max(nums[i]+helper(i+2, memo), nums[i]+helper(i+3, memo))
        return memo[i]
    }
    
    return Math.max(helper(0), helper(1))
};
