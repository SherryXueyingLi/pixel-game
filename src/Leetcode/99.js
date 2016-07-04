//99. Recover Binary Search Tree
// Two elements of a binary search tree (BST) are swapped by mistake.

// Recover the tree without changing its structure.

// Note:
// A solution using O(n) space is pretty straight forward. Could you devise a constant space solution?

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
import React from "react";
import Template from "./Template";
var recoverTree = function(root) {
    let cur = root, previous, error0, error1;
    while(cur){
        if(cur.left === null){
            if(previous && cur.val < previous.val){
                if(!error0)  error0 = previous;
                error1 = cur;
            }
            previous = cur;
            cur = cur.right;
        }else{
            let left = cur.left, prd = left;
            while(prd && prd.right && prd.right!=cur) prd = prd.right;
            if(prd.right === null){
                prd.right = cur;
                cur = cur.left;
            }else{
                if(previous && cur.val < previous.val){
                    if(!error0)  error0 = previous;
                    error1 = cur;
                }
                previous = cur;
                prd.right = null;
                cur = cur.right;
            }
        }
    }
    if(error0 && error1){
        let t = error0.val;
        error0.val = error1.val;
        error1.val = t;
    }
};

export default class RecoverTree extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var recoverTree = function(root) {
    let cur = root, previous, error0, error1;
    while(cur){
        if(cur.left === null){
            if(previous && cur.val < previous.val){
                if(!error0)  error0 = previous;
                error1 = cur;
            }
            previous = cur;
            cur = cur.right;
        }else{
            let left = cur.left, prd = left;
            while(prd && prd.right && prd.right!=cur) prd = prd.right;
            if(prd.right === null){
                prd.right = cur;
                cur = cur.left;
            }else{
                if(previous && cur.val < previous.val){
                    if(!error0)  error0 = previous;
                    error1 = cur;
                }
                previous = cur;
                prd.right = null;
                cur = cur.right;
            }
        }
    }
    if(error0 && error1){
        let t = error0.val;
        error0.val = error1.val;
        error1.val = t;
    }
};`,
            explain:`using O(n) space is the key to this subject, it means we cannot use recursive. 
Inorder to travel the tree without recursive, a travel algorithem named 'Morris Inorder Tree Traversal' could do much help.
For the Morris Traveral, refer to video [here](https://www.youtube.com/watch?v=wGXB9OWhPTg).

For those who cannot access to youtobe, check the answer [here](https://leetcode.com/discuss/26310/detail-explain-about-morris-traversal-finds-incorrect-pointer);
            `
        }
    }
    static title(){ return "99. Recover Binary Search Tree";}

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title={RecoverTree.title()} id={this.props.id} difficulty="Hard"/>
    }
}