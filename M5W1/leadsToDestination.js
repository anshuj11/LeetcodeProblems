/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function(n, edges, source, destination) {
  
  let leaves = new Array(n).fill(true)
  let adjList = {}
  
  
  //find the end nodes that are not destination
  for( let i = 0; i < edges.length; i++) {
    let beg = edges[i][0]
    let end = edges[i][1]
    if (adjList[beg] === undefined) {
      if (beg === destination) {
        return false
      }
      adjList[beg] = [end]
  
    } else {
      adjList[beg].push(end)
    }
  }
  
  let seen = new Set;
  let visiting = new Set;
  
  //find if there is a path from source to any leaf that doesn't go through destination
  
  //DFS
  var DFS = (node) => {
      if( node == destination) return true;
      if (seen.has(node))
        return true;
      if(visiting.has(node))
        return false
      visiting.add(node)
      let children = adjList[node]
      if(children == undefined)
        return false
      for( let i = 0; children && i < children.length; i++) {
        let child = children[i]
        if(!DFS(child))
          return false
      }
      visiting.delete(node)
      seen.add(node)
      return true;
  }
  
  return DFS(source)
  
};
