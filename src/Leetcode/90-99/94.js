

import React from "react";
import Template from "../Template";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var rt = [], cache= [], curr = root;
    while(curr || cache.length > 0){
        while(curr){
            cache.push(curr);
            curr = curr.left;
        }
        curr = cache.pop();
        rt.push(curr.val);
        curr = curr.right;
    }
    return rt;
};


export default class  BinaryTreeInorder extends React.Component{
     constructor(){
        super();
        this.state = {
            code :`/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    var rt = [], cache= [], curr = root;
    while(curr || cache.length > 0){
        while(curr){
            cache.push(curr);
            curr = curr.left;
        }
        curr = cache.pop();
        rt.push(curr.val);
        curr = curr.right;
    }
    return rt;
};
            `,
            explain: `
The solution is actually like when we calculating manually, when we get the root, we go left, 
* If the left node has a left child, we put the node in the queue, keep tracking.
* If the node has no left child, back to queue, good, put the node's value into result set.
* Process it's right leg as current node.

            `,subject:`Given a binary tree, return the inorder traversal of its nodes' values.\n

For example:\n
Given binary tree [1,null,2,3],\n
	 1
	  \\
	   2
	 /
	3
return [1,3,2].\n

Note: Recursive solution is trivial, could you do it iteratively?`
        }
     }
    static title(){ return "94. Binary Tree Inorder Traversal";}
    render(){
        const {code, explain, subject} = this.state;
        return (
            <Template code = {code} explain = {explain} title={BinaryTreeInorder.title()} id={this.props.id} subject={subject} difficulty="Medium"/>
        );
     }
}