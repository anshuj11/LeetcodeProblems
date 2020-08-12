var getRow = function(rowIndex) {
    let pTriangle = [[1]]
    for( let i = 1; i <= rowIndex; i++){
        let row = []
        for( let j = 0; j <= pTriangle[i - 1].length; j++){
            if(j == 0)
                row.push(pTriangle[i - 1][j])
            else if(j == pTriangle[i - 1].length)
                row.push(pTriangle[i - 1][j - 1])
            else
                row.push(pTriangle[i - 1][j] + pTriangle[i - 1][j - 1] )
        }
        pTriangle.push(row)
    }
    return pTriangle[pTriangle.length - 1]
        
};
