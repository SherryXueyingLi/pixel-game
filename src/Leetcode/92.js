// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,

// return 1->4->3->2->5->NULL.

// Note:
// Given m, n satisfy the following condition:
// 1 ≤ m ≤ n ≤ length of list.
import ListNode from "./ListNode";
import React from "react";
import Template from "./Template";


/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n){
    var reverseBetween = function(head, m, n) {
        let stay = new ListNode(0);
        stay.next = head;
        let pre = stay;
        for(let i=0; i<m-1; i++) pre = pre.next;
        let start = pre.next, next = start.next;
        for(let i=m; i<n; i++){
            start.next = next.next;
            next.next = pre.next;
            pre.next = next;
            next = start.next;
            console.log( head);
        }
        return stay.next;
    };

};

export default class  ReverseListII extends React.Component{
    constructor(){
        super();
        this.state = {
            code:`
var reverseBetween = function(head, m, n) {
    let stay = new ListNode(0);
    stay.next = head;
    let pre = stay;
    for(let i=0; i<m-1; i++) pre = pre.next;
    let start = pre.next, next = start.next;
    for(let i=m; i<n; i++){
        start.next = next.next;
        next.next = pre.next;
        pre.next = next;
        next = start.next;
        console.log( head);
    }
    return stay.next;
};
`,
description: `To Create Three Points: The Pre Point, pointing to the pre node of the target, the start of the target, and the target node.`
        }
    }

    render(){
        const {code, description} = this.state;
        return (
            <Template code = {code} explain = {description} title="92. Reverse Linked List II" id={this.props.id}/>
        );
    }
}