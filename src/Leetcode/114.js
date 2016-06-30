var flatten = function(root) {
    if(root){
        let left = root.left, rihgt = root.right, head = root;
        flatten(root.left);
        flatten(root.right);
        head.right = left;
        head.left = null;
        while(head.right!==null){head = head.right;}
        head.right = rihgt;
    }
};