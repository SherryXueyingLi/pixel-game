import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a string s, partition s such that every substring of the partition is a palindrome.\n

Return the minimum cuts needed for a palindrome partitioning of s.\n

For example, given s = \`"aab"\`,\n
Return \`1\` since the palindrome partitioning \`["aa","b"]\` could be produced using 1 cut.`,
             code: `/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let l = s.length, min = [];
    for (let i = 0; i <= l; i++) min[i] = i-1;
    for(let i=0; i<l; i++){
        for(let j=0; i-j>=0 && i+j<l && s.charAt(i-j)===s.charAt(i+j); j++){ //expand with i as center
            min[i+j+1] = Math.min(min[i+j+1], 1+min[i-j]);
        }
        for (let j = 1; i-j+1 >= 0 && i+j < l && s.charAt(i-j+1) === s.charAt(i+j); j++){
            min[i+j+1] = Math.min(min[i+j+1],1+min[i-j+1]);  //expand with i&i+1 as center
        } 
    }
    return min[l];
};
`,
            explain:`This divide-and-conquer algorithm utilize the symmetry of palindromes, so there is no need to cache the result of whether s[i:j) is a palindrome.\n

Say that it started at s[i] = \`'b'\`, and \`s[i-1,i+1]\` is a palindrome \`"aba"\`:\n

    .......aba...
    |<-X->| ^
    |<---Y-->|
And we know the least cuts for \`s[0,i-1)\` is X, then the least cuts for \`s[0,i+1]\` Y is not greater than X+1. Last, we need to find out all the palindromes in \`s[0,i+1]\` so as to minimize the number of cuts.`          
        }
    }

    static title(){ return "132. Palindrome Partitioning II";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Hard" subject={subject}/>
    }
}