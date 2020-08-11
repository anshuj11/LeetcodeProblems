var minPathSum = function(grid) {
     let m = grid.length;
     let n = grid[0].length;
  
      for(let i = m - 1; i > -1; i--){
          for(let j = n - 1; j > -1; j--){
              // if its the right-down corner
              // do nothing
              if ( j == n - 1 && i == m - 1 )
                  continue;
              else if ( j == n - 1 )  // for last row, just add the elment from next col
                   grid[i][j] += grid[i+1][j]
              else if ( i == m - 1)  // for last col, just add the element from next row
                   grid[i][j] += grid[i][j+1]
              else // pick the min from next row or next col
                 grid[i][j] += Math.min(grid[i+1][j], grid[i][j+1])
          }
      }
      return grid[0][0] // return the value at [0,0]
};
