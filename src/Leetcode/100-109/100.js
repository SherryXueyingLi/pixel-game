// 100. Same Tree
// Difficulty: Easy


/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

import React from "react";
import Template from "../Template";
var isSameTree = function(p, q) {
    if(p===null && q===null) return true;
    return p!==null && q!==null && (p.val === q.val) &&isSameTree(p.left, q.left)  && isSameTree(p.right, q.right);
};

export default class SameTree extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p===null && q===null) return true;
    return p!==null && q!==null && (p.val === q.val) &&isSameTree(p.left, q.left)  && isSameTree(p.right, q.right);
};`,
            explain:`Too easy, the code is clear enough.
            `,subject:`Given two binary trees, write a function to check if they are equal or not.\n

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.`
        }
    }

    static title(){ return "100. Same Tree";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={SameTree.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}