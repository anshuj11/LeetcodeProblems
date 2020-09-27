var mergeKLists = function(lists) {
    let newList = null
    let scrubList = []
    for( let i = 0; i< lists.length; i++){
      if(lists[i])
        scrubList.push(lists[i])
    }
    lists = scrubList;
    if( lists.length === 0) return null
    if( lists.length === 1) return lists[0]
    let temp = 0
    let nodesRemaining = false
    for( let i = 1;i < lists.length; i++){
      if(!lists[i]) continue;
      nodesRemaining = true;
      if ( lists[i].val < lists[temp].val)
        temp = i
    }
    if(!nodesRemaining) return null;
    newList = lists[temp]
    let nxt = newList;
    lists[temp] = lists[temp].next
    if(!lists[temp]){
        temp = 0;
        while(!lists[temp] && temp < lists.length)
          temp++
        if(temp == lists.length) 
          return newList
      }
    nodesRemaining = true
    while(nodesRemaining){
      nodesRemaining = false
      for( let i = 0;i < lists.length; i++){
        if(!lists[i]) continue;
        nodesRemaining = true
        if ( lists[i].val < lists[temp].val){
          temp = i
        }
      }
      nxt.next = lists[temp]
      nxt = nxt.next
      lists[temp] = lists[temp].next
      if(!lists[temp]){
        temp = 0;
        while(!lists[temp] && temp < lists.length)
          temp++
        if(temp == lists.length) 
          return newList
      }
    }
    return newList
};
