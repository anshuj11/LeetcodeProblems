var orangesRotting = function(grid) {
    let flag = 0;
    for(let i = 0; i < grid.length; i++)
      if( grid[i].includes(1) )
        flag = 1
    if( flag == 0) return flag;
    flag = -1
    for(let i = 0; i < grid.length; i++)
      if( grid[i].includes(2) )
        flag = 1
    if( flag == -1) return flag;
  
    for( let i= 0; i < grid.length; i++)
      for(let j = 0; j < grid[0].length; j++)
        if((grid[i][j] === 1) &&
            (i === 0 || grid[i - 1][j] === 0 ) &&
            (i === grid.length - 1 || grid[i+1][j] === 0) &&
            (j === 0 || grid[i][j - 1] === 0 ) &&
            ( j === grid[0].length - 1 || grid[i][j+1] === 0))
          return -1
  cnt = 0
  let allRotten = false;
   while(!allRotten && cnt < grid.length*grid[0].length){
     allRotten = true;
     let changeArray = []
     for( let i= 0; i < grid.length; i++)
      for(let j = 0; j < grid[0].length; j++){
        if(grid[i][j] === 0 || grid[i][j] === 2 ) continue;
        allRotten = false;
        if(
            (i !== 0 && grid[i - 1][j] === 2) ||
            (i !== grid.length - 1 && grid[i+1][j] === 2) ||
            (j !== 0 && grid[i][j - 1] === 2 ) ||
            ( j !== grid[0].length - 1 && grid[i][j+1] === 2)){
          changeArray.push([i,j])
        }
      }
     
     for(let i = 0; i < changeArray.length; i++){
       let [x, y] = changeArray[i]
       grid[x][y] = 2
     }
     //console.log(grid)
     if( allRotten) return cnt;
     cnt++
       
   } 
   return -1
   
};
