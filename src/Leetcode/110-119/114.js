

import React from "react";
import Template from "../Template";
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root){
        let left = root.left, rihgt = root.right, head = root;
        flatten(root.left);
        flatten(root.right);
        head.right = left;
        head.left = null;
        while(head.right!==null){head = head.right;}
        head.right = rihgt;
    }
};
export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root){
        let left = root.left, rihgt = root.right, head = root;
        flatten(root.left);
        flatten(root.right);
        head.right = left;
        head.left = null;
        while(head.right!==null){head = head.right;}
        head.right = rihgt;
    }
};`,
            explain:`The core to solve this problem is to realize that it is actually inserting it's left subtree into the node and it's right child.\n

So, given \n

        1
       / \\
      2   3

What we will do is to insert left child into middle of root and right child.\n
it becomes \n

       1
        \\
         2
          \\
           3

Now assume 2 & 3 is not a node, instead, they are trees.`,
            subject:`Given a binary tree, flatten it to a linked list in-place.\n

For example,\n
Given\n

             1
            / \\
           2   5
          / \   \\
         3   4   6
The flattened tree should look like:\n
       1
        \\
         2
          \\
           3
            \\
             4
              \\
               5
                \\
                 6
click to show hints.\n`
        }
    }

    static title(){ return "114. Flatten Binary Tree to Linked List";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="" subject={subject} difficulty="Medium"/>
    }
}