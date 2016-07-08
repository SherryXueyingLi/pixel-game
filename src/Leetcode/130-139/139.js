import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

For example, given
s = \`"leetcode"\`,
dict = \`["leet", "code"]\`.

Return true because \`"leetcode"\` can be segmented as \`"leet code"\`.`,
             code: `/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let isValid = [true];
    for(let i=1; i<=s.length; i++){
        for(let j=0; j<i; j++){
            if(isValid[j] && wordDict.has(s.substring(j, i))){
                isValid[i] = true;
                break;
            }
        }
    }
    return isValid[s.length] || false;
};`,
            explain:`isValid[i] means s[0...i-1] can be found in disctionary.`          
        }
    }

    static title(){ return "139. Word Break";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}
