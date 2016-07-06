import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a binary tree containing digits from \`0-9\` only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path \`1->2->3\` which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

        1
       / \\
      2   3
The root-to-leaf path \`1->2\` represents the number \`12\`.
The root-to-leaf path \`1->3\` represents the number \`13\`.

Return the sum = 12 + 13 = \`25\`.`,
             code: `
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if(!root) return 0;
    let array = [];
    numset(root, root.val, array);
    return array.reduce((a, b)=> {return a+b}, 0);
};

var numset = function(root, cur, array){
    if(!root.left && !root.right) {array.push(cur); }
    if(root.left) numset(root.left, cur*10+root.left.val, array);
    if(root.right) numset(root.right, cur*10+root.right.val, array);
}`,
            explain:`We push the number into our array when we found the node is an leaf, else we save the number and keep tracking down.`          
        }
    }

    static title(){ return "129. Sum Root to Leaf Numbers";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}
