import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given two words (*beginWord* and *endWord*), and a dictionary's word list,  find the length of shortest transformation sequence from beginWord to endWord, such that:\n

1. Only one letter can be changed at a time\n
2. Each intermediate word must exist in the word list\n
For example,\n

Given:\n
*beginWord* = \`"hit"\`\n
*endWord* = \`"cog"\`\n
*wordList* = \`["hot","dot","dog","lot","log"]\`\n
As one shortest transformation is \`"hit" -> "hot" -> "dot" -> "dog" -> "cog"\`,
return its length 5.
__Note:__\n
+ Return 0 if there is no such transformation sequence.\n
+ All words have the same length.\n
+ All words contain only lowercase alphabetic characters.\n`,
             code: ``,
            explain:``          
        }
    }

    static title(){ return "127. Word Ladder";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}