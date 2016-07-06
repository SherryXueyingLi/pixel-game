// 112. Path Sum



import React from "react";
import Template from "../Template";


var hasPathSum = function(root, sum) {

    if(root===null) return false;
    if(root.left === null && root.right === null && root.val === sum) return true;
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
};


export default class PathSum extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {

    if(root===null) return false;
    if(root.left === null && root.right === null && root.val === sum) return true;
    return hasPathSum(root.left, sum-root.val) || hasPathSum(root.right, sum-root.val);
};`,
            explain:``,
            subject:`Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:\n
Given the below binary tree and \`sum = 22\`,\n

                  5
                 / \\
                4   8
               /   / \\
              11  13  4
             /  \\      \\
            7    2      1
            
return true, as there exist a root-to-leaf path \`5->4->11->2\` which sum is 22.`
        }
    }

    static title(){ return "112. Path Sum";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={PathSum.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}