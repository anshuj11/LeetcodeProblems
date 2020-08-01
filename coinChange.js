var coinChange = function(coins, amount, j=0) {
 
  let cache = {}
  let coinCount = Infinity;
    
  const helper = (amount, j) => {
      
      let key = [amount, j].join("-")
      if(cache[key] > -2)
          return cache[key]
      
      if (coins.length === 0) return -1
      if (amount === 0) return 0
      if (amount < 0) return -1

      let minCount = Infinity

      for( let i=j;i<coins.length;i++){
          let res = helper( amount - coins[i], i)
          if(res !== -1)
            minCount = Math.min(minCount, res+1)    
      }
     if( minCount === Infinity) return cache[key] = -1

      return cache[key] = minCount 
  }
  return helper(amount, 0)
    
};
