//105. Construct Binary Tree from Preorder and Inorder Traversal
//

import React from "react";
import Template from "../Template";
import TreeNode from "../TreeNode";
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let stack = [], inorderIndex = 0, preIndex=0;
    let pp = null, root= new TreeNode(null), ptr=root;
    stack.push(root);
    while(inorderIndex<inorder.length){
        if(stack[stack.length-1].val === inorder[inorderIndex]){
            pp = stack.pop();
            inorderIndex++;
        }else{
            ptr=new TreeNode(preorder[preIndex]);
            if(pp===null) stack[stack.length-1].left=ptr;
            else{pp.right=ptr;pp=null;}
            stack.push(ptr);
            preIndex++;
        }
    }
    ptr=root.left;
    return ptr;
};


export default class ConstructTree extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let stack = [], inorderIndex = 0, preIndex=0;
    let pp = null, root= new TreeNode(null), ptr=root;
    stack.push(root);
    while(inorderIndex<inorder.length){
        if(stack[stack.length-1].val === inorder[inorderIndex]){
            pp = stack.pop();
            inorderIndex++;
        }else{
            ptr=new TreeNode(preorder[preIndex]);
            if(pp===null) stack[stack.length-1].left=ptr;
            else{pp.right=ptr;pp=null;}
            stack.push(ptr);
            preIndex++;
        }
    }
    ptr=root.left;
    return ptr;`,
            explain:`For the defination, the [in]order, [pre]order and [post]order means the position of the centre node. so inorder means: node.val -> node.left.val -> node.right.val\n
            The solution idea could refer to [here](http://articles.leetcode.com/construct-binary-tree-from-inorder-and-preorder-postorder-traversal);
With this given information, we know that [pre]order's first element must be the root node.\n
Assume that first element in preOrder is [3], and in the inOrder, \n
\n
    all numbers in the left side of 3 must be left subtree of node 3. 
    all numbers in the right side of 3 must be the right subtree of 3.
\n
So let's set a pointer, pointing to the ith elemnt in the preorder(0 <= i < inOrder.length), the value is preorder[i] = x.\n
We want to find x in the inOrder, mean while, we want to save all elements in it's left hand in a stack, \n
when we find x in the inOrder, we know that all value in stack is in it's left sub tree. \n
 \n
This is the [recursive] solution. \n

            `,subject: "Given preorder and inorder traversal of a tree, construct the binary tree."
        }
    }

    static title(){ return "105. Construct Binary Tree from Preorder and Inorder Traversal";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ConstructTree.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}