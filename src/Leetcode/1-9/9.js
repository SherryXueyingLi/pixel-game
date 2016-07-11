import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Determine whether an integer is a palindrome. Do this without extra space.\n
__Some hints:__\n
Could negative integers be palindromes? (ie, -1)n

If you are thinking of converting the integer to string, note the restriction of using extra space.n

You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?n

There is a more generic way of solving this problem.`,
             code: ``,
            explain:``          
        }
    }

    static title(){ return "9. Palindrome Number";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}