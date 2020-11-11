var canFinish = function(numCourses, prerequisites) {
    if( prerequisites.length === 0)
      return true;
    preReq = {}
  
    for (let i = 0; i < prerequisites.length; i++) {
      let [course, pre] = prerequisites[i]
      
      if( preReq[course] === undefined) {
        preReq[course] = [pre]
      }else
        preReq[course].push(pre)
    }
    
    let seen = new Set
    let anyDelete = true;
    while(anyDelete) {
      anyDelete = false;
    for( let i = 0; i < numCourses; i++ ) {
      if( preReq[i] === undefined ) {
        for (let j = 0; j < numCourses; j++) {
          if(preReq[j] && preReq[j].includes(i)) {
            let ind = preReq[j].indexOf(i)
            preReq[j].splice(ind, 1)
            if( preReq[j].length == 0) {
              delete preReq[j]
              anyDelete = true
            }
          }
        }
      }
    }
    }
    //console.log(`${Object.keys(preReq).length}`)
    if( Object.keys(preReq).length == 0)
      return true;
    return false
  
    
};
