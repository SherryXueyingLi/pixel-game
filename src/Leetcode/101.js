//	101	Symmetric Tree
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.
import React from "react";
import Template from "./Template";
var isSymmetric = function(root) {
    return root === null || areSymmetricTree(root.left, root.right); 
};

var areSymmetricTree = function(t1, t2) {
    return (t1===null && t2===null)||(t1!==null && t2!==null && t1.val===t2.val && areSymmetricTree(t1.left, t2.right) && areSymmetricTree(t1.right, t2.left));
};

export default class SymmetricTree extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var isSymmetric = function(root) {
    return root === null || areSymmetricTree(root.left, root.right); 
};

var areSymmetricTree = function(t1, t2) {
    return (t1===null && t2===null)||(t1!==null && t2!==null && t1.val===t2.val && areSymmetricTree(t1.left, t2.right) && areSymmetricTree(t1.right, t2.left));
};`,
            explain:`Too easy, the code is clear enough.
            `
        }
    }

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title="101. Symmetric Tree" id={this.props.id} difficulty="Easy"/>
    }
}