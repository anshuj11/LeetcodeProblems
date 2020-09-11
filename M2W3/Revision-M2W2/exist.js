var exist = function(board, word) {
    
    let height = board.length;
    let width = board[0].length;
    
    const helper=(i, j, index, memo={})=> {
       if(index === word.length)
           return true;
       let key = `${i}:${j}`
       memo[key] = true;
        
       if(i!==0 && board[i-1][j] === word[index] && memo[`${i - 1}:${j}`] == undefined){
         if(helper(i-1, j, index+1, memo)) return true;
       } 
       if(i < height - 1 && board[i+1][j] === word[index] && memo[`${i+1}:${j}`] == undefined){
          if(helper(i+1, j, index+1, memo)) return true;
       }
       if(j > 0 && board[i][j-1] === word[index] && memo[`${i}:${j - 1}`] == undefined){
          if(helper(i, j-1, index+1, memo)) return true;
       }  
       if(j < width - 1 && board[i][j+1] === word[index] && memo[`${i}:${j+1}`] == undefined){
          if(helper(i, j+1, index+1, memo)) return true;
       }  
       delete memo[key] 
       return false 
    }
    
    for(let i = 0;i < board.length; i++){
      for(let j = 0;j < board[0].length; j++){
          if(board[i][j] === word[0]){
             if(helper(i, j, 1)) return true;
          }
      } 
    }
    return false;
};
