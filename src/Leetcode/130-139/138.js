import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.\n

Return a deep copy of the list.\n`,
             code: `/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    let map = {};
    return copyNode(map,head);
};

var copyNode = function(map, head) {
    if(!head) return null;
    if(map[head.label]!==undefined) return map[head.label];
    let node = new RandomListNode(head.label);
    map[head.label] = node;
    node.next = copyNode(map, head.next);
    node.random = copyNode(map, head.random);
    
    return node;
};`,
            explain:`Same as subject 133, clone graph.`          
        }
    }

    static title(){ return "138. Copy List with Random Pointer ";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}