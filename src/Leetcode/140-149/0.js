import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a string s and a dictionary of words dict, add spaces in s to construct a sentence where each word is a valid dictionary word.\n

Return all such possible sentences.\n

For example, given\n
s = \`"catsanddog"\`,\n
dict = \`["cat", "cats", "and", "sand", "dog"]\`.\n

A solution is \`["cats and dog", "cat sand dog"]\`.`,
            code: ``,
            explain:``          
        }
    }

    static title(){ return "140. Word Break II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}