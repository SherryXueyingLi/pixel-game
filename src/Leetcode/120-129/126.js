import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given two words (*beginWord* and *endWord*), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:\n

1. Only one letter can be changed at a time\n
2. Each intermediate word must exist in the word list\n
For example,\n

Given:\n
*beginWord* = \`"hit"\`\n
*endWord* = \`"cog"\`\n
*wordList* = \`["hot","dot","dog","lot","log"]\`\n
Return\n
	[
        ["hit","hot","dot","dog","cog"],
        ["hit","hot","lot","log","cog"]
	]
__Note:__\n
+ All words have the same length.\n
+ All words contain only lowercase alphabetic characters.`,
             code: ``,
            explain:``          
        }
    }

    static title(){ return "126. Word Ladder II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}