//102. Binary Tree Level Order Traversal
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
import React from "react";
import Template from "./Template";
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let rt = [];
    travel(root, 0, rt)
    return rt;
};

var travel = function(root, level, rt) {
    if(!root) return;
    if(!rt[level]) rt[level] = [];
    rt[level].push(root.val);
    if(root.left) travel(root.left, level+1, rt);
    if(root.right) travel(root.right, level+1, rt);
};
export default class BSTLevelOrder extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var levelOrder = function(root) {
    let rt = [];
    travel(root, 0, rt)
    return rt;
};

var travel = function(root, level, rt) {
    if(!root) return;
    if(!rt[level]) rt[level] = [];
    rt[level].push(root.val);
    if(root.left) travel(root.left, level+1, rt);
    if(root.right) travel(root.right, level+1, rt);
};`,
            explain:`
            `
        }
    }

    static title(){ return "102. Binary Tree Level Order Traversal";}

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title={BSTLevelOrder.title()} id={this.props.id} difficulty="Easy"/>
    }
}