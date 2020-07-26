var checkValidString = function(s, stack = []) {
    for(let i=0;i<s.length;i++){
        let ch = s[i]
        if( ch === "(" ){
            stack.push(ch)
        }else if(ch === ")"){
            if(stack[stack.length - 1] === "(" ){
                stack.pop()
            }else{
                return false
            }
        }else if(ch === "*"){
            let A = "(" + s.slice(i+1);
            let B = ")"+s.slice(i+1);
            let stackB = stack.map(el => el)
            let C = s.slice(i+1)
            let stackC = stack.map(el => el)
            return (checkValidString(A, stack) ||  checkValidString(B, stackB) || checkValidString(C, stackC))
        }
    }
    if(stack.length)
        return false
    return true
};
