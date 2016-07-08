export var TreeNode = function(val){
    this.val = val;
    this.left = this.right = null;
};

TreeNode.prototype.toString = function(){
    return `Value: ${this.val}, left: ${this.left}, right: ${rhis.right}`;
};

export var ListNode = function(val){
    this.val = val;
    this.next = null;
};

ListNode.prototype.toString = function(){
    let s = this.val, t = this;
    while(t.next){
        t = t.next;
        s = `${s} -> ${t.val}`;
    }
    return s;
};