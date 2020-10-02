var findRelativeRanks = function(nums) {
    let temp = nums.slice()
        temp.sort((a,b) => b - a)
    
    let ranks = {}
    temp.forEach((el, i) => ranks[el] = i )
  
    let res = []
    nums.forEach((el) => {
      switch(ranks[el]) {
        case 0: res.push("Gold Medal")
          break;
        case 1: res.push("Silver Medal")
          break;
        case 2: res.push("Bronze Medal")
          break;  
        default:
          // code block
          res.push(ranks[el]+1+"")
          break;
      }

    } )
   return res
};
