var exist = function(board, word) {
     const helper = (i, j, ind, memo = {} ) => {
        let key = `${i}:${j}` 
        
        memo[key] = true;
        if(ind === word.length)
            return true
        
        if(j < (board[0].length - 1) && board[i][j+1] === word[ind] && memo[`${i}:${j+1}`] == undefined ){
             if (helper(i, j+1, ind + 1, memo)) return true
        }
        if(i < board.length - 1 && board[i + 1][j] === word[ind] && memo[`${i + 1}:${j}`] == undefined ){
             if (helper(i + 1, j, ind + 1, memo)) return true
        }
        if(j > 0 && board[i][j - 1] === word[ind] && memo[`${i}:${j - 1}`] == undefined ){
             if (helper(i, j - 1, ind + 1, memo)) return true
        }
        if(i > 0 && board[i - 1][j] === word[ind] && memo[`${i - 1}:${j}`] == undefined ) {
             if (helper(i - 1, j, ind + 1, memo)) return true
          
         
        }
        delete memo[key]
        return false
          
    }
    
    for(let i = 0; i < board.length; i++){
           for(let j = 0; j < board[0].length; j++){
               if(board[i][j] === word[0]){
                   if(helper(i, j, 1, {} )) return true
               }
           }
        }
    return false;
   
};
