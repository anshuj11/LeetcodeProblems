var sortArrayByParityII = function(A) {
    let evenPtr = [];
    let oddPtr = [];
    for( let i = 0 ; i < A.length; i++){
        if( A[i]%2 !== i%2){
            (i%2 == 0)? evenPtr.push(i): oddPtr.push(i);
            if( evenPtr.length && oddPtr.length){
                e = evenPtr.pop();
                o = oddPtr.pop();
                [A[e], A[o]] = [A[o], A[e]]
            }
                
        }
    }
    return A
}
