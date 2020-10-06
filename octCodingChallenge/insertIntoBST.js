var insertIntoBST = function(root, val) {
    if(!root){
      let node = new TreeNode(val)
      root = node
      return root
    }
    if(root.val > val){
      root.left = insertIntoBST(root.left, val)
      return root
    }
    root.right = insertIntoBST(root.right, val)
    return root
};
