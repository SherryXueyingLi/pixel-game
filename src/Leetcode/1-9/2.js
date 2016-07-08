import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.\n

__Input:__ (2 -> 4 -> 3) + (5 -> 6 -> 4)\n
__Output:__ 7 -> 0 -> 8\n`,
             code: `/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let extr = 0, n1=l1, n2=l2;
    let rot = new ListNode(0), cur = rot;
    while(n1 || n2){
        let val = (n1?n1.val:0) + (n2?n2.val:0) + extr;
        extr = val>=10? 1 : 0;
        cur.next = new ListNode(val%10);
        cur = cur.next;
        n1 = n1 && n1.next; 
        n2 = n2 && n2.next;
    }
    if(extr) cur.next = new ListNode(1);
    return rot.next;
};`,
            explain:`Just like what you do with plus calculation.`          
        }
    }

    static title(){ return "2. Add Two Numbers";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}