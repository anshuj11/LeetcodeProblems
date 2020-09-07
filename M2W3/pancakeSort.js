var pancakeSort = function(arr) {
    let n = arr.length;
    let ind;
    let res = []
    
    const flip = (ind) => {
        let left = 0;
        let right = ind;
        while(left < right){
            [arr[left], arr[right]] =  [arr[right], arr[left]]
            left++
            right--
        }
    }
    for(let i = n; i > 0; i--) {
      ind = arr.indexOf(i);
      if(ind === i - 1)  continue;
      flip(ind) 
      res.push(ind + 1)  
      flip(i - 1)
      res.push(i)  
    }
   return res 
};
