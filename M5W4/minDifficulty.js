var minDifficulty = function(jobD, d) {
  
  if(jobD.length < d)
    return -1
  
  let cache = {};
  
  var dfs = (start, day) => {
    if (jobD.length - start < d - day)
      return -1
    let key = `${start}:${day}`
    if ( day === d ) {
     return start === jobD.length ? 0 : Infinity;
    }
    if(cache[key] !== undefined)
      return cache[key]
    const end = jobD.length - d + day;
    
    let max = -Infinity;
    let minD = Infinity;
    console.log(`start: ${start}, end: ${end}, day: ${day}`)
    for( let i = start; i <= end; i++) {
      max = Math.max(max, jobD[i])
      minD = Math.min( minD, max + dfs(i+1, day+1))
    }
    return cache[key] = minD;
  }
  
  return dfs(0, 0)

};
