//106. Construct Binary Tree from Inorder and Postorder Traversal


import React from "react";
import Template from "../Template";
import TreeNode from "../Node";
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;
    let ip = inorder.length - 1,pp = postorder.length - 1, stack = [];
    let prev = null, root = new TreeNode(postorder[pp]);
    stack.push(root);
    pp--;
    while (pp >= 0) {
        while (stack.length>0 && stack[stack.length-1].val == inorder[ip]) {
            prev = stack.pop();
            ip--;
        }
        let newNode = new TreeNode(postorder[pp]);
        if (prev !== null) {
            prev.left = newNode;
        } else if (stack.length>0) {
            stack[stack.length-1].right = newNode;
        }
        stack.push(newNode);
        prev = null;
        pp--;
    }
    return root; 
};

var recursive = function(inorder, postorder){
    if(inorder.length === 0 ) return null;
    let root = postorder[postorder.length-1], i=0;
    while(inorder[i]!=root){
        i++;
    }
    let node = new TreeNode(root);
    node.left = buildTree(inorder.slice(0, i), postorder.slice(0, i));
    node.right = buildTree(inorder.slice(i+1), postorder.slice(i, postorder.length-1));
    return node;
}


export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;
    let ip = inorder.length - 1,pp = postorder.length - 1, stack = [];
    let prev = null, root = new TreeNode(postorder[pp]);
    stack.push(root);
    pp--;
    while (pp >= 0) {
        while (stack.length>0 && stack[stack.length-1].val == inorder[ip]) {
            prev = stack.pop();
            ip--;
        }
        let newNode = new TreeNode(postorder[pp]);
        if (prev !== null) {
            prev.left = newNode;
        } else if (stack.length>0) {
            stack[stack.length-1].right = newNode;
        }
        stack.push(newNode);
        prev = null;
        pp--;
    }
    return root; 
};`,
            explain:`The recursive solution Refer to 105.\n
\n
A more space saving solution is :\n
\n
>Starting from the last element of the postorder and inorder array, \n
>we put elements from postorder array to a stack and each one is the right child of the last one until an element in postorder array is equal to the element on the inorder array.\n
>Then, we pop as many as elements we can from the stack and decrease the mark in inorder array until the peek() element is not equal to the mark value or the stack is empty. \n
>Then, the new element that we are gonna scan from postorder array is the left child of the last element we have popped out from the stack.\n
            `,subject:`Given inorder and postorder traversal of a tree, construct the binary tree.\n
__Note:__\n
You may assume that duplicates do not exist in the tree.\n`
        }
    }

    static title(){ return "106. Construct Binary Tree from Inorder and Postorder Traversal";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}