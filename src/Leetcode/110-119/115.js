//115. Distinct Subsequences


import React from "react";
import Template from "../Template";
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let map = Array.apply(null, Array(t.length+1)).map(v=>{
        return Array.apply(null,  Array(s.length+1));
    });
    for(let i=0; i<=t.length; i++){
        for(let j=0; j<=s.length; j++){
            if(i===0) map[i][j] = 1;
            else if(j===0) map[i][j] = 0;
            else{
                if(s.charAt(j-1) === t.charAt(i-1)) map[i][j] = map[i][j-1] + map[i-1][j-1];
                else  map[i][j] = map[i][j-1];
            }
        }
    }
    return map[t.length][s.length];
};


export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let map = Array.apply(null, Array(t.length+1)).map(v=>{
        return Array.apply(null,  Array(s.length+1));
    });
    for(let i=0; i<=t.length; i++){
        for(let j=0; j<=s.length; j++){
            if(i===0) map[i][j] = 1;
            else if(j===0) map[i][j] = 0;
            else{
                if(s.charAt(j-1) === t.charAt(i-1)) map[i][j] = map[i][j-1] + map[i-1][j-1];
                else  map[i][j] = map[i][j-1];
            }
        }
    }
    return map[t.length][s.length];
};`,
            explain:`Suppose we have Target and Source String T[0...t], S[0...s]. \n
Suppose we know that \n
	For Target[0...t-1] and for S[0...s-1], we have x distinct subsequences.
	For Target[0...t], S[0...s-1], we have y distinct subsequences.
    
We are about to consider the char S[s].
            
            `,subject: `Given a string S and a string T, count the number of distinct subsequences of T in S.

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, \`"ACE"\` is a subsequence of \`"ABCDE"\` while \`"AEC"\` is not).

Here is an example:
S = \`"rabbbit"\`, T = \`"rabbit"\`

Return \`3\``
        }
    }

    static title(){ return "115. Distinct Subsequences";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}