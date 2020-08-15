/**
 * @param {string} s
 * @return {boolean}
 */

var helper = (s, seen) => {
    if(seen.hasOwnProperty(s))
        return seen[s]
    
    for(let i=0; i < s.length - 1; i++) {
        if(s.startsWith('++', i)){
           var t = s.substring(0, i) + "--" + s.substring(i+2); 
           if(!helper(t,seen)){
              seen[s] = true
              return seen[s] 
           }
        }
    }
    seen[s] = false;
    return seen[s]
}

var canWin = function(s) {
   
    if(s===null || s.length < 2)
        return false
    let seen = {}
    return helper(s, seen)

   
};
