// 109. Convert Sorted List to Binary Search Tree

// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

import React from "react";
import Template from "./Template";
import ListNode from "./ListNode";
import TreeNode from "./TreeNode";

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    return sortedArrayToBST(findList(head));
};
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    let ith = Math.floor((nums.length)/2);
    let root = new TreeNode(nums[ith]);
    root.left = sortedArrayToBST(nums.slice(0, ith));
    root.right = sortedArrayToBST(nums.slice(ith+1));
    return root;
};
var findList = function(head) {
    let a = [], p = head;
    while(p){a.push(p.val); p = p.next;}
    return a;
};

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var sortedListToBST = function(head) {
    return sortedArrayToBST(findList(head));
};
var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return null;
    let ith = Math.floor((nums.length)/2);
    let root = new TreeNode(nums[ith]);
    root.left = sortedArrayToBST(nums.slice(0, ith));
    root.right = sortedArrayToBST(nums.slice(ith+1));
    return root;
};
var findList = function(head) {
    let a = [], p = head;
    while(p){a.push(p.val); p = p.next;}
    return a;
};`,
            explain:`Put it into an array, then use function in 108.`
        }
    }

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title="" id={this.props.id} difficulty=""/>
    }
}