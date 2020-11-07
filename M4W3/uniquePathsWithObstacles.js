/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
    let uP = [];
    let obs = false;
    for(let i=0;i<grid.length;i++){
        uP[i] = [];
        if(!obs && grid[i][0] === 1)
            obs = true
        
        uP[i][0] = !obs?1:0
    }
    obs = false
    for(let i=0;i<grid[0].length;i++){
        if(!obs && grid[0][i] === 1)
            obs = true
        
        uP[0][i] = !obs?1:0
    }
    
    for(let i=1;i<grid.length;i++){
        for(let j=1;j<grid[0].length;j++){
            if(grid[i][j] === 1)
                uP[i][j] = 0;
            else{
                uP[i][j] = uP[i-1][j]+uP[i][j-1]
            }
        }
    }
    return uP[grid.length - 1][grid[0].length - 1]
};
