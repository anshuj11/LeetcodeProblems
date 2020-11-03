/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  var helper = (r = root, memo = [], minDiff = Infinity) => {
    if(!r) {
      return minDiff
    }
    for ( let i = 0; i < memo.length; i++) {
      minDiff = Math.min(minDiff, Math.abs(r.val - memo[i]))
      if( minDiff == 1) return minDiff
    }
    memo.push(r.val)
    minDiff = Math.min(minDiff, helper(r.left, memo, minDiff), helper(r.right, memo, minDiff))
    return minDiff
    
  }  
  return helper();
};
