// 111. Minimum Depth of Binary Tree

// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
import React from "react";
import Template from "./Template";


/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null)   return 0;
    if (root.left === null)  return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left),minDepth(root.right)) + 1;
};


export default class MinDepth extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var minDepth = function(root) {
    if (root === null)   return 0;
    if (root.left === null)  return minDepth(root.right) + 1;
    if (root.right === null) return minDepth(root.left) + 1;
    return Math.min(minDepth(root.left),minDepth(root.right)) + 1;
};`,
            explain:`Check Code`
        }
    }

    static title(){ return "111. Minimum Depth of Binary Tree";}

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title={MinDepth.title()} id={this.props.id} difficulty="Easy"/>
    }
}