// 112. Path Sum
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// Subscribe to see which companies asked this question

import React from "react";
import Template from "./Template";
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {

    if(root===null) return false;
    if(root.left === null && root.right === null && root.val === sum) return true;
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
};


export default class PathSum extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var hasPathSum = function(root, sum) {

    if(root===null) return false;
    if(root.left === null && root.right === null && root.val === sum) return true;
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
};`,
            explain:``
        }
    }

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title="112. Path Sum" id={this.props.id} difficulty="Easy"/>
    }
}