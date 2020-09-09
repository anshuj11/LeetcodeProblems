var canArrange = function(arr, k) {
    let kArr = new Array(k).fill(null).map((_, i) => i)
    let kMap = {}
    kArr.forEach(el => {
        kMap[el] = []
    })
    arr.forEach(el => {
        let ind = (el%k);   
        while(ind < 0) ind = ind + k
        kMap[ind].push(el)
    })
   
   if(kMap[0].length%2 !== 0) return false
   kArr.shift();
   let foundPairs = true; 
   kArr.forEach(el =>{
       if(kMap[el].length !== kMap[k - el].length ) foundPairs = false;
   })
   return foundPairs; 
};
