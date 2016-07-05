//110. Balanced Binary Tree


import React from "react";
import Template from "../Template";

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) return true;
    return isBalanced(root.left) && isBalanced(root.right) && checkInterval(root);
};


var countDepth = function(root, base){
    if(root === null) return base;
    return Math.max(countDepth(root.left, base+1), countDepth(root.right, base+1));
}

var checkInterval = function(root){
	if(root===null) true;
    let ld=countDepth(root.left, 0), rd=countDepth(root.right, 0);
    return Math.abs(rd-ld)<=1;
}


export default class  BalancedBinaryTree extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if(root === null) return true;
    return isBalanced(root.left) && isBalanced(root.right) && checkInterval(root);
};


var countDepth = function(root, base){
    if(root === null) return base;
    return Math.max(countDepth(root.left, base+1), countDepth(root.right, base+1));
}

var checkInterval = function(root){
	if(root===null) true;
    let ld=countDepth(root.left, 0), rd=countDepth(root.right, 0);
    return Math.abs(rd-ld)<=1;
}`,
            explain:``,
            subject:`Given a binary tree, determine if it is height-balanced.\n

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.\n`
        }
    }

    static title(){ return "110. Balanced Binary Tree";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={BalancedBinaryTree.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}