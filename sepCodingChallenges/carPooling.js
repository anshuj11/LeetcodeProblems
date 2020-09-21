var carPooling = function(trips, capacity) {
    let arr = []
    for(let j = 0; j < trips.length; j++){
      let [cap, start, end] = trips[j]
      
      for ( let i = start; i < end; i++){
        if(arr[i] == undefined){
          arr[i] = cap
        }else{
          arr[i] += cap
        }
        if(arr[i] > capacity)
          return false;
      }
    }
  return true;
};
