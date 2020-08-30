var jump = function(nums) {
    let minJump = 0
    let index = 0;
    let maxIndex = 0
    
    while(maxIndex < nums.length - 1){
        let newMaxIndex = index
        for ( let i = index; i <= maxIndex; i++) {
             newMaxIndex = Math.max(newMaxIndex, i + nums[i])
        }
        
        if( newMaxIndex === maxIndex) return -1

        index = maxIndex + 1
        maxIndex = newMaxIndex;
        minJump++
        
    }
    
    return minJump
};
