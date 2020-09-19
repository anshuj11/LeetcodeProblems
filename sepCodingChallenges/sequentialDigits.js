var sequentialDigits = function(low, high) {
    let lowStr = low+"";
    let minLength = lowStr.length;
    let highStr = high+"";
    let maxLength = highStr.length;
    let res = []
    
    let baseStr = ("123456789");
  
    for(let i=minLength; i <= maxLength; i++){
      //pick all substr of length i
      for(let j = 0; j < baseStr.length - i + 1; j++){
        res.push(baseStr.slice(j, j+i))
      }
    }
    res = res.map(el => parseInt(el))
    
    return res.filter(el => (el >= low) && (el <= high))
};
