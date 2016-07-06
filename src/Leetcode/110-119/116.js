//116. Populating Next Right Pointers in Each Node





import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `
/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root) return;
    if(root.left) root.left.next = root.right;
    if(root.next && root.right) root.right.next = root.next.left;
    connect(root.left);
    connect(root.right);
};`,
            explain:`Since we know that the given tree is __perfect binary tree__, we could know that It's left child's next is right child.\n
If the root node has next, then it's right child's next is it's next node's left child. Then we use recursive, all done.`,
            subject:`Given a binary tree \n

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }\n
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to \`NULL\`.\n

Initially, all next pointers are set to \`NULL\`.\n

__Note:__\n

You may only use constant extra space.\n
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).\n
For example,\n
Given the following perfect binary tree,\n
             1
           /  \\
          2    3
         / \\  / \\
        4  5  6  7
After calling your function, the tree should look like:\n
             1 -> NULL
           /  \\
          2 -> 3 -> NULL
         / \\  / \\
        4->5->6->7 -> NULL`
        }
    }

    static title(){ return "116. Populating Next Right Pointers in Each Node";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}


/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root) return;
    if(root.left) root.left.next = root.right;
    if(root.next && root.right) root.right.next = root.next.left;
    connect(root.left);
    connect(root.right);
};