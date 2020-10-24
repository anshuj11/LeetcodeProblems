var find132pattern = function(nums) {
    let stack = []
    
    for(let i = 0; i < nums.length; i++){
      if(!stack.length){
        stack.push({'max': nums[i], 'min': nums[i] } )
      }else{
       let top = stack.length - 1;
        if( nums[i] <= stack[top]['min'] ){
          stack.push({'max': nums[i], 'min': nums[i] })
        }else{
          let last = stack.pop()
          if( nums[i] >= last['max'] )
            last['max'] = nums[i]
          else
            return true
          top = stack.length - 1
          while(top > -1 && stack[top]['max'] <= nums[i]){
            stack.pop();
            top = stack.length - 1
          }
          if( top > -1 && stack[top]['min'] < nums[i])
            return true
            
          
          stack.push(last)
          
        }
        
      }
    }
  return false
};
