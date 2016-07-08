import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a linked list, determine if it has a cycle in it.\n

Follow up:\n
Can you solve it without using extra space?\n`,
             code: `/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let walker = head, runner = head;
    while(runner){
        walker = walker.next;
        if(!runner.next) return false;
        runner = runner.next.next;
        if(walker === runner) return true;
    }
    return false;
};`,
            explain:`from leetcode @fabrizio3 \n 
1. Use two pointers, walker and runner. \n
2. walker moves step by step. runner moves two steps at time. \n 
3. if the Linked List has a cycle walker and runner will meet at some point.\n`          
        }
    }

    static title(){ return "141. Linked List Cycle";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}