import React from "react";
import Template from "../Template";

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    while(root){
        let pre = new TreeLinkNode(0), curr=pre, top = root;
        while(top){
            if(top.left) {
                curr.next = top.left;
                curr = top.left;
            }
            if(top.right){
                curr.next = top.right;
                curr = top.right;
            } 
            top = top.next;
        }
        root = pre.next;
    }
};

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {   
    while(root){
        let pre = new TreeLinkNode(0), curr=pre, top = root;
        while(top){
            if(top.left) {
                curr.next = top.left;
                curr = top.left;
            }
            if(top.right){
                curr.next = top.right;
                curr = top.right;
            } 
            top = top.next;
        }
        root = pre.next;
    }
};`,
            explain:`The key to understand the solution is to identify each pointer's function.\n
In this solution, we keep a pointers: \n
1. root : pointing to the first node of level n ( 1<=n<= depth of tree). \n
2. pre : in the next level of root, always pointting to the first node of level n+1. \n
3. top : the current root node in level n. \n
4. curr: the last processing node in level n+1. \n

So the ouuer loop is actually descripted as \n
>While there has next level of tree, move to next level, set root as the first node of this level. \n
The inner loop is: \n
>In level n, pointer top initiated as first node, while 'top' exists, process 'top' node and move to top.next. \n
`,
            subject:`Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?\n

__Note__:\n

You may only use constant extra space.\n
For example,\n
Given the following binary tree,\n

             1
           /  \\
          2    3
         / \\    \\
        4   5    7

After calling your function, the tree should look like:\n

             1 -> NULL
           /  \\
          2 -> 3 -> NULL
         / \\    \\
        4-> 5 -> 7 -> NULL`
        }
    }

    static title(){ return "117. Populating Next Right Pointers in Each Node II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}