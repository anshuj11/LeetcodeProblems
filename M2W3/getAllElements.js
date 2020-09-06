var getAllElements = function(root1, root2) {
    let t1 = []
    let t2 = []
    var traverse = (root, t) => {
        if(!root) return;
        traverse (root.left, t)
        t.push(root.val)
        traverse(root.right, t)
    }
    traverse(root1, t1)
    traverse(root2, t2)
    let res = []
    let i=0, j=0;
    for(; i < t1.length && j < t2.length; ){
        if (t1[i] < t2[j]) {
            res.push(t1[i])
            i++
        }else{
            res.push(t2[j])
            j++
        }
    }
    if(i < t1.length){
        while( i < t1.length){
            res.push(t1[i]);
            i++;
        }
    }else{
        while(j < t2.length){
            res.push(t2[j]);
            j++;
        }
    }
        
    return res
};
