import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a string, find the length of the __longest substring__ without repeating characters.\n

__Examples:__\n

Given \`"abcabcbb"\`, the answer is \`"abc"\`, which the length is 3.\n

Given \`"bbbbb"\`, the answer is \`"b"\`, with the length of 1.\n

Given \`"pwwkew"\`, the answer is \`"wke"\`, with the length of 3. Note that the answer must be a substring, \`"pwke"\` is a subsequence and not a substring.\n`,
             code: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {}, max = 0; begin = -1;
    for(let i=0; i<s.length; i++){
        if(map[s.charAt(i)]!==undefined){
            begin = Math.max(begin, map[s.charAt(i)]);
        }
        max = Math.max(max,  i-begin);
        map[s.charAt(i)] = i;
    }
    return max;
};`,
            explain:`For each char c in ith position, we want to know the max length without duplicated. \n
Assume we processed [3...7], and we find that \`char[8] = char[4]\`, which means we need to move our begin pointer to 4. The length will be \`8-5=3\`. Then we compare it's length with max, and update the max value.\n
But if we found that \`char[8] = char[2]\`, we actually \`do not\` need to care about it, since the bgin pointer is larger than 2.`          
        }
    }

    static title(){ return "3. Longest Substring Without Repeating Characters";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}