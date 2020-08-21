/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
    let ans = []
    for(let i=0;i<mat.length; i++)
        ans.push([])
    for(let i=0;i < mat.length; i++)
        for(let j = 0;j < mat[0].length; j++){
            let sum = 0;
            for(let m = i - K; m <= i + K; m++ ){
                for(let n = j - K; n <= j + K; n++){
                    if(m <0 || n < 0 || m > mat.length - 1 || n > mat[0].length - 1 ) continue;
                    sum += mat[m][n]
                        
                
                }
            }
            ans[i][j] = sum;
        }
    return ans
};
