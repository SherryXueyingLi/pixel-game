// 104. Maximum Depth of Binary Tree
// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

import React from "react";
import Template from "./Template";
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    return depth(root, 0);
};

var depth = function(root, cur){
    if(root === null) return 0;
    return Math.max(depth(root.left)+1, depth(root.right)+1);
}
export default class BTDepth extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `
var maxDepth = function(root) {
    return depth(root, 0);
};

var depth = function(root, cur){
    if(root === null) return 0;
    return Math.max(depth(root.left)+1, depth(root.right)+1);
}`,
            explain:`
            `
        }
    }

    static title(){ return "104. Maximum Depth of Binary Tree";}

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title={BTDepth.title()} id={this.props.id} difficulty="Easy"/>
    }
}