var maxNonOverlapping = function(nums, target) {  
    let res = 0;
    let seen = new Set;
    let sum = 0;
    
    nums.forEach( el => {
        sum += el
        if((sum===target) || seen.has(sum - target )){
            sum = 0
            res++
            seen.clear()
        }else{
            seen.add(sum)
        }
    }) 
    return res   
};
