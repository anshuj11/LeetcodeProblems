var minMoves = function(nums) {
    nums.sort( (a,b) => a - b)
   let moves = 0;
   for ( let i = 1; i < nums.length; i++){
    let diff = moves + nums[i] - nums[i - 1]
    nums[i] += moves
    moves += diff
   }
  return moves
};
