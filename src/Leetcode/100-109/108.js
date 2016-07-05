//108. Convert Sorted Array to Binary Search Tree
//

import React from "react";
import Template from "../Template";
import TreeNode from "../TreeNode";
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    let ith = Math.floor((nums.length)/2);
    let root = new TreeNode(nums[ith]);
    root.left = sortedArrayToBST(nums.slice(0, ith));
    root.right = sortedArrayToBST(nums.slice(ith+1));
    return root;
};
export default class Array2BST extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    let ith = Math.floor((nums.length)/2);
    let root = new TreeNode(nums[ith]);
    root.left = sortedArrayToBST(nums.slice(0, ith));
    root.right = sortedArrayToBST(nums.slice(ith+1));
    return root;
};`,
            explain:`Start from the middle. Build the left and right subtree recursively.`,
            subject: "Given an array where elements are sorted in ascending order, convert it to a height balanced BST."
        }
    }

    static title(){ return "108. Convert Sorted Array to Binary Search Tree";}


    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={Array2BST.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}