var maximumSum = function(arr) {
   let leftSubArr = [arr[0]]
   let rightSubArr = []
   rightSubArr[arr.length - 1] = arr[arr.length - 1]
   
   let rightMax = arr[arr.length - 1]
   
   
   for ( let i = 1; i < arr.length; i++) {
       leftSubArr[i] = Math.max(arr[i], leftSubArr[i-1]+arr[i])
     //  leftMax = Math.max(leftMax, leftSubArr[i])
   }
    
  //  console.log(`leftSubArr: ${leftSubArr}, leftMax: ${leftMax}`)
    for ( let i = arr.length - 2; i > -1; i--) {
       rightSubArr[i] = Math.max(arr[i], rightSubArr[i+1]+arr[i])
       rightMax = Math.max(rightMax, rightSubArr[i])
   }
   // console.log(`rightSubArr: ${rightSubArr}, rightMax: ${rightMax}`)
    let max = rightMax;
    for ( let i = 1; i < arr.length - 1; i++) {
        max = Math.max( leftSubArr[i-1]+rightSubArr[i+1], max)
    }
    return max
};
