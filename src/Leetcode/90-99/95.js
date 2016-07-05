//95. Unique Binary Search Trees II


import React from "react";
import Template from "../Template";
import TreeNode from "../TreeNode";
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n===0) return [];
    return generateTree(1, n);
};

var generateTree = function(start, end){
    if(start > end ) return [null];
    if(start === end ) {
        let n = new TreeNode(start);
        return [n];
    }
    let treeList = [];
    for(let i =start; i<=end; i++){
        let left = generateTree(start, i-1), right = generateTree(i+1, end);
        for(let l in left){
            for(let r in right){
                let n = new TreeNode(i);
                n.left = left[l], n.right = right[r];
                treeList.push(n);
            }
        }
    }
    return treeList;   
}

export default class UniqueTreesII extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n===0) return [];
    return generateTree(1, n);
};

var generateTree = function(start, end){
    if(start > end ) return [null];
    if(start === end ) {
        let n = new TreeNode(start);
        return [n];
    }
    let treeList = [];
    for(let i =start; i<=end; i++){
        let left = generateTree(start, i-1), right = generateTree(i+1, end);
        for(let l in left){
            for(let r in right){
                let n = new TreeNode(i);
                n.left = left[l], n.right = right[r];
                treeList.push(n);
            }
        }
    }
    return treeList;   
}
            `,
            explain:`for generateing 1-n's full binary tree, the very first thing is to pick 1...n as the root repectively.\n
and for Each number x we pick, we know that **[1...x-1]** are on it's left, and **[x+1...n]** are on it's right.\n
So we need to find all possible trees of 1...x-1, all possible trees of x+1...n, put them as left and right lef of n respectively,\n
* Remember trees of [1...x-1] may have **p1** possible solutions, and [x+1...n] may have **p2** possible solutions,\n
In this case, when we considering x as root, we have __p1*p2__ possible binary trees, we just need to permutation the possible solutions and return.
            `,subject:`Given an integer n, generate all structurally unique BST's (binary search trees) that store values 1...n.\n

For example,\n
Given n = 3, your program should return all 5 unique BST's shown below.\n

       1         3     3      2      1
        \\       /     /      / \\      \\
         3     2     1      1   3      2
        /     /       \\                 \\
       2     1         2                 3`
        }
    }
    static title(){ return "95. Unique Binary Search Trees II";}

    render(){
        const {code, explain, subject} = this.state;
        return (
            <Template code={code} explain={explain} title={UniqueTreesII.title()} id={this.props.id} subject={subject} difficulty="Medium"/>
        );
    }
}