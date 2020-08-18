var numsSameConsecDiff = function(N, K) {
    let res = [] 
    if( N === 1) res.push(0)
   
    let j = 1
    
   
    while(j <= 9) {
         let temp_stack = [[j]]
         for(let i = 1; i < N ;i++) {
            let new_temp_stack = [] 
            while(temp_stack.length){ 
             let temp_res = temp_stack.pop()
               if (temp_res[i - 1]+ K <= 9){
                     temp_res.push(temp_res[i - 1]+ K )
                     new_temp_stack.push(temp_res.map(el=>el))
                     temp_res.pop()
               }
               if( K !== 0 && temp_res[i - 1] - K >= 0 ){
                     temp_res.push(temp_res[i - 1] - K)
                     new_temp_stack.push(temp_res)
               }
            }
            temp_stack = new_temp_stack;
        }
        res = res.concat(temp_stack.map(el => el.join("")))
        j++
    }
    return res
};
