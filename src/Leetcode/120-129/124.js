import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a binary tree, find the maximum path sum.\n

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path does not need to go through the root.\n

For example:\n
Given the below binary tree,\n

           1
          / \\
         2   3
Return \`6\`.`,
             code: `/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let rt=[-Infinity];
    maxDown(root, rt);
    return rt[0];
};

var maxDown = function(root, rt){
    if(!root) return 0;
    let left =  Math.max(0, maxDown(root.left, rt));
    right = Math.max(0, maxDown(root.right, rt));
    rt[0] = Math.max((root.val + left + right ), rt[0]); 
    return Math.max(left, right) + root.val;
}`,
            explain:`The idea comes from leetcode discuss @wei-bung 
>Here's my ideas:
>
>* A path from start to end, goes up on the tree for 0 or more steps, then goes down for 0 or more steps. Once it goes down, it can't go up. Each path has a highest node, which is also the lowest common ancestor of all other nodes on the path.
>* A recursive method maxPathDown(TreeNode node) (1) computes the maximum path sum with highest node is the input node, update maximum if necessary (2) returns the maximum sum of the path that can be extended to input node's parent.`          
        }
    }

    static title(){ return "124. Binary Tree Maximum Path Sum";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}