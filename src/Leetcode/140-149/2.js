import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a linked list, return the node where the cycle begins. If there is no cycle, return null.\n

__Note:__ Do not modify the linked list.\n

Follow up:\n
Can you solve it without using extra space?`,
             code: ``,
            explain:``          
        }
    }

    static title(){ return "142. Linked List Cycle II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}