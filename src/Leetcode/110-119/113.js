//113. Path Sum II


import React from "react";
import Template from "../Template";
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    return subpathSum(root, sum, []);
};

var subpathSum = function(root, sum, array) {
    if(root === null) return array;
    if(root.val === sum && root.left===null && root.right === null){
        return [array.concat(root.val)];
    }
    let left, right;
    if(root.left) left = subpathSum(root.left, sum-root.val, array.concat(root.val));
    if(root.right) right = subpathSum(root.right, sum-root.val, array.concat(root.val));
    return (left ||[]).concat(right||[]);
};
export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    return subpathSum(root, sum, []);
};

var subpathSum = function(root, sum, array) {
    if(root === null) return array;
    if(root.val === sum && root.left===null && root.right === null){
        return [array.concat(root.val)];
    }
    let left, right;
    if(root.left) left = subpathSum(root.left, sum-root.val, array.concat(root.val));
    if(root.right) right = subpathSum(root.right, sum-root.val, array.concat(root.val));
    return (left ||[]).concat(right||[]);
};`,
            explain:``,subject:`Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.\n

For example:\n
Given the below binary tree and sum = 22,\n
                  5
                 / \\
                4   8
               /   / \\
              11  13  4
             /  \\    / \\
            7    2  5   1
return\n
    [
        [5,4,11,2],
        [5,8,4,5]
    ]`
        }
    }

    static title(){ return "113. Path Sum II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}