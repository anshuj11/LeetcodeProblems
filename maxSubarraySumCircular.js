/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    var findMax = function(A) {
        let sumSoFar = A[0]
        let max = A[0]
        
        for ( let i = 1; i < A.length ; i++) {
            if(A[i] < 0 && sumSoFar < 0){
                sumSoFar = A[i]
            }else if(A[i] > 0 && sumSoFar > 0){
                sumSoFar += A[i]
            }else{
                sumSoFar += A[i]
                sumSoFar = Math.max(sumSoFar, A[i])
            }
            max = Math.max(max, sumSoFar)
        }
        return max
    }
    
    let linearMax = findMax(A)
    
    let APrime = A.map(el => el* -1)
    
    let linearMin = findMax(APrime)
    
    let total = A.reduce((acc,el) => acc+el)
    
    let circularMax = total - (linearMin* -1)
    
    if(circularMax === 0) return linearMax
    
    return Math.max(circularMax, linearMax)

};
