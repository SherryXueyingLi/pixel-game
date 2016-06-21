export var TreeNode = function(val){
    this.val = val;
    this.left = this.right = null;
};

TreeNode.prototype.toString = function(){
    return `Value: ${this.val}, left: ${this.left}, right: ${rhis.right}`;
};