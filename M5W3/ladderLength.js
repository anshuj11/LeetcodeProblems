var validShift = function(w1, w2) {
  let diff = 0;
  for ( let i = 0; i < w1.length && diff < 2; i++ ){
    if(w1[i] !== w2[i])
      diff++
  }
  return diff < 2
}
var ladderLength = function(beginWord, endWord, wordList) {
  let adjList = {}
  
  for( let i = 0; i < wordList.length; i++) {
    const w1 = wordList[i];
    for ( let j = 0; j < wordList.length; j++) {
      const w2 = wordList[j]
     if( validShift( w1, w2)) {
       if(adjList[w1] === undefined)
         adjList[w1] = [w2]
       else
         adjList[w1].push(w2)
       if(adjList[w2] === undefined)
         adjList[w2] = [w1]
       else
         adjList[w2].push(w1)
     }
    }
  }
  
  adjList[beginWord] = []
  
  for( let i = 0; i < wordList.length; i++) {
     let w2 = wordList[i]
     if( validShift( beginWord, w2)) {
       adjList[beginWord].push(w2)
     }
  }
    
   let q = [[beginWord]]
   let path = 0;
   let seen = new Set;
   while (q.length) {
     let que = q.shift();
     path++
     let newQue = []
     for ( let i = 0; i < que.length; i++) {
       if(seen.has(que[i])) continue;
       seen.add(que[i])
       if( que[i] == endWord)
         return path;
       else{
         newQue.push(...adjList[que[i]])
       }
     }
     if( newQue.length)
        q.push(newQue)
   }
   return 0;
};
