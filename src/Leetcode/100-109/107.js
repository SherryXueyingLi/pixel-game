//107. Binary Tree Level Order Traversal II


/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let rt = [];
    travel(root, 0, rt)
    return rt.reverse();
};

var travel = function(root, level, rt) {
    if(!root) return;
    if(!rt[level]) rt[level] = [];
    rt[level].push(root.val);
    if(root.left) travel(root.left, level+1, rt);
    if(root.right) travel(root.right, level+1, rt);
};`,
            explain:`Finish 102 and reverse the result.`,
            subject:`Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree \`[3,9,20,null,null,15,7]\`,
        3
       / \\
      9  20
        /  \\
       15   7
return its bottom-up level order traversal as:
    [
        [15,7],
        [9,20],
        [3]
    ]`
        }
    }

    static title(){ return "107. Binary Tree Level Order Traversal II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}
var levelOrderBottom = function(root) {
    let rt = [];
    travel(root, 0, rt)
    return rt.reverse();
};

var travel = function(root, level, rt) {
    if(!root) return;
    if(!rt[level]) rt[level] = [];
    rt[level].push(root.val);
    if(root.left) travel(root.left, level+1, rt);
    if(root.right) travel(root.right, level+1, rt);
};
