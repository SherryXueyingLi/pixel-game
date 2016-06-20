export default Node = function(val){
    this.val = val;
    this.next = null;
}

Node.prototype.toString = function(){
    let s = this.val, t = this;
    while(t.next){
        t = t.next;
        s = `${s} -> ${t.val}`;
    }
    return s;
}