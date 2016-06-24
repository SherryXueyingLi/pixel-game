//113. Path Sum II
// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// return
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

import React from "react";
import Template from "./Template";
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    
};
export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: ``,
            explain:``
        }
    }

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title="" id={this.props.id} difficulty=""/>
    }
}