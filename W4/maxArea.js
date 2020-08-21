/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, hC, vC) {
 hDelta = []
 vDelta = []  
 hC.push(h, 0)   
 vC.push(w, 0)  
 hC.sort((a,b) => a - b)  
 vC.sort((a,b) => a - b)      
 let hMax = 0
 let vMax = 0
 for(let i = 1; i < hC.length; i++){
     hMax = Math.max(hMax, hC[i] - hC[i - 1])
 }
 for(let i = 1; i < vC.length; i++){
     vMax = Math.max(vMax, vC[i] - vC[i - 1])
 }  
 biggest_area = hMax * vMax
 return biggest_area  % (1000000000 + 7) 
};
