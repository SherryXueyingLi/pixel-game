//98. Validate Binary Search Tree
// Given a binary tree, determine if it is a valid binary search tree (BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//     2
//    / \
//   1   3
// Binary tree [2,1,3], return true.
// Example 2:
//     1
//    / \
//   2   3
// Binary tree [1,2,3], return false.
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
import React from "react";
import Template from "./Template";
var isValidBST = function(root) {
    return valid(root);
};

var valid = function(root, min, max){
    if(root === null) return true;
    if(root.val <= min || root.val >= max) return false;
    return valid(root.left, min, root.val) && valid(root.right,root.val, max);
}

export default class ValidateBSTree extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var isValidBST = function(root) {
    return valid(root);
};

var valid = function(root, min, max){
    if(root === null) return true;
    if(root.val <= min || root.val >= max) return false;
    return valid(root.left, min, root.val) && valid(root.right,root.val, max);
}
            `,
            explain:`
In order to prove the given BSTree could satisfy the conditions, we need to use the 'recursive way'\n

To check if this root node is valid, we need to prove :\n 
\n
 1. if its val is in interval\n
 2. It's left subtree and right subtree is valid.\n
\n
So now the problem is how to define the interval.\n
\n
For the begining, if the given node is the root node of the whole tree, the min and max number could be infinity, \n
so at the begining  -infinity<root.val<+infinity .\n
Then left subtree(L) has an interval: -infinity<L.val<parent's val.\n
The right subtree(R) has an interval: parent's val<R.val<+infinity.\n
\n
Now we could conclude, for any tree(T), if the root node has an parent(P), and P's interval is (m, n),\n
    If(T is left subtree of P) T's interval is (m, P.val)
    If(T is right subtree of P) T's interval is (P.val, n)
`
        }
    }

    render(){
        const {code, explain} = this.state;
        return (
            <Template code={code} explain={explain} title="98. Validate Binary Search Tree" id={this.props.id}/>
        );
    }
}

