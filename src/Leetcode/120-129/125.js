import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.\n

For example,\n
    \`"A man, a plan, a canal: Panama"\` is a palindrome.
    \`"race a car"\` is not a palindrome.

__Note:__\n
Have you consider that the string might be empty? This is a good question to ask during an interview.\n

For the purpose of this problem, we define empty string as valid palindrome.\n`,
             code: `/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let c = s.toLowerCase().split("").filter(v=>{return /[a-z0-9]{1}/.test(v);});
    for(let i=0; i<c.length/2; i++){
        if(c[i] !== c[c.length-1-i]) return false;
    }
    return true;
};`,
            explain:`Process the string, then check from edge to center.`          
        }
    }

    static title(){ return "125. Valid Palindrome";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}