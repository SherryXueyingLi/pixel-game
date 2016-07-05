//103. Binary Tree Zigzag Level Order Traversal

import React from "react";
import Template from "../Template";
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let rt = [];
    console.log(root);
    travel(root, 0, rt)
    return rt;
};

var travel = function(root, level, rt) {
    if(!root) return;
    if(!rt[level]) rt[level] = [];
    if(level%2===0) rt[level].push(root.val);
    else rt[level] = [root.val].concat(rt[level] );
    if(root.left) travel(root.left, level+1, rt);
    if(root.right) travel(root.right, level+1, rt);
};
export default class ZigzagLevel extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let rt = [];
    console.log(root);
    travel(root, 0, rt)
    return rt;
};

var travel = function(root, level, rt) {
    if(!root) return;
    if(!rt[level]) rt[level] = [];
    if(level%2===0) rt[level].push(root.val);
    else rt[level] = [root.val].concat(rt[level] );
    if(root.left) travel(root.left, level+1, rt);
    if(root.right) travel(root.right, level+1, rt);
};`,
            explain:`The only difference between 102 & 103 is that we need to consider the level is odd or even, and for even, we push, for odd, add the val as the first element.
            `,subject:`Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).\n

For example:\n
Given binary tree [3,9,20,null,null,15,7],\n
        3
       / \\
      9  20
        /  \\
       15   7
return its zigzag level order traversal as:
    [
        [3],
        [20,9],
        [15,7]
    ]`
        }
    }

    static title(){ return "103. Binary Tree Zigzag Level Order Traversal";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ZigzagLevel.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}