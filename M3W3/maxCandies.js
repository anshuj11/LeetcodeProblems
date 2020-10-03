var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
  let stack = new Set(initialBoxes);
  let totalCandies = 0
  let change = true
  while(change){
    change = false;
    for(let box of stack){
  
      if(status[box] === 1){
        
        status[box] = 2
        totalCandies += candies[box]
        stack.delete(box)
        change = true;
        
        
        keys[box].forEach( el => {
          if( status[el] === 0 ) 
            status[el] = 1
        }) 
      
        containedBoxes[box].forEach(el => {
          if(status[el] < 2){
            stack.add(el)
          }
        }) 
      }
    }
  }
  return totalCandies
  
};
