var canCompleteCircuit = function(gas, cost) {
    if( gas.reduce((acc,el) => acc+el) < cost.reduce((acc,el) => acc+el))
      return -1
    let len = gas.length;
    for( let i = 0 ; i < len ; i++){
      let start = i
      let  gasAvail = gas[i]
      if( cost[i] > gasAvail ) continue;
      gasAvail -= cost[i]  
      i = (i+1)%len;
      for(;i !== start; i = (i+1)%len){
         gasAvail += gas[i]
         if( cost[i] > gasAvail ) break;
         gasAvail -= cost[i]  
      }
      if(i == start)
        return start
    }
   return -1
};
