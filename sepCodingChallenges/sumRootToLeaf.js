// sep 8, 2020
var sumRootToLeaf = function(root) {
    let sum = 0;
    
    const helper = ( root, prefix) => {
        if(!root){
         sum += parseInt(prefix)
         return   
        } 
        if(!root.left && !root.right ) {
            sum += parseInt(prefix+root.val+"", 2) 
            return
        }
        if(root.left) helper(root.left, prefix+root.val+"")
        if(root.right) helper(root.right, prefix+root.val+"")
    }
    helper(root, "" )
    return sum;
};
