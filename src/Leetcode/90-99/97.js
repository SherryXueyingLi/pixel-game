//97. Interleaving String


import React from "react";
import Template from "../Template";
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;
    let table = Array.apply(null, Array(s2.length+1)).map(v=>{
        return Array.apply(null, Array(s1.length+1));
    });   
    table[0][0] = true;
    for(let i=0; i<=s2.length; i++){
        for(let j=0; j<=s1.length; j++){
            if(i===0 && j===0) table[i][i] = true;
            else if(i===0) table[i][j] = (table[i][j-1] && s1.charAt(j-1) === s3.charAt(j-1));
            else if(j===0) table[i][j] = (table[i-1][j] && s2.charAt(i-1) === s3.charAt(i-1));
            else table[i][j] = (table[i-1][j] && s2.charAt(i-1) === s3.charAt(i+j-1)) || (table[i][j-1] && s1.charAt(j-1) === s3.charAt(i+j-1));
        }
    }
    return table[s2.length][s1.length];
};

export default class Interleaving extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    if(s1.length + s2.length !== s3.length) return false;
    let table = Array.apply(null, Array(s2.length+1)).map(v=>{
        return Array.apply(null, Array(s1.length+1));
    });   
    table[0][0] = true;
    for(let i=0; i<=s2.length; i++){
        for(let j=0; j<=s1.length; j++){
            if(i===0 && j===0) table[i][i] = true;
            else if(i===0) table[i][j] = (table[i][j-1] && s1.charAt(j-1) === s3.charAt(j-1));
            else if(j===0) table[i][j] = (table[i-1][j] && s2.charAt(i-1) === s3.charAt(i-1));
            else table[i][j] = (table[i-1][j] && s2.charAt(i-1) === s3.charAt(i+j-1)) || (table[i][j-1] && s1.charAt(j-1) === s3.charAt(i+j-1));
        }
    }
    return table[s2.length][s1.length];
};

            `,
            explain:`To explain the sulution, let's construct a table for s1="abc" s2="def", s3="adebcf": \n
 \n
    (0,0)start --- (0,1)a --- (0,2)b --- (0,3)c   \n
    (1,0)d -------- (1,1) ----- (1,2) ----- (1,3)    \n
    (2,0)e -------- (2,1) ----- (2,2) ----- (2,3)    \n
    (3,0)f -------- (3,1) ----- (3,2) ----- end(3,3) \n
\n
We have a table of width = s1.length+1 and height = s2.width+1. The init value are all undefined expect (0,0) = true.\n
In next steps we are going to fullfill this table with boolean value to indecate if the path is for s3 or not.\n
\n
We start with start point, and every time we 'go', we could only go left or down untill we rich the 'end' point\n
\n
    If we go left, we go step over one char of s1.
    If we go down, we go step over one char of s2.
\n
For each point's location (i, j) indecates that we are checking (i+j)'s char of s3, wihich is s3.charAt(i+j-1).\n
\n
We do the judgement after we step over, so the value of (i, j) is actually depend on (i-1, j) and (i, j-1);\n
\n
Now Suppose we are targeting to check value of (i, j), we are checking s3.charAt(i+j-1), \n
\n
1. if(i===0) \n
i=0 means the previous step have only one possible position: (i, j-1), any other positions cannot step into (i, j).\n
then we only need to check if previous step is true and current char is equal to s1's i-1's char.\n
\n
2. if(j===0) \n
j=0 means the previous step have only one possible position: (i-1, j), checking method is same with situation 1.\n
\n
3. i!==0 && j!==0\n
In this case, we the value could be true if any of the following situation is true:\n
    * The previouse step (i-1, j) is true, it steped dowm, found that target char s3.charAt(i+j-1) === s2.charAt(i-1);\n
    * The previouse step (i, j-1) is true, it steped right, found that target char s3.charAt(i+j-1) === s1.charAt(j-1);\n
`,subjcet:`Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.\n

For example,\n
Given:\n
s1 = \`"aabcc"\`,\n
s2 = \`"dbbca"\`,\n

When s3 = \`"aadbbcbcac"\`, return true.\n
When s3 = \`"aadbbbaccc"\`, return false.\n`
        }
    }

    static title(){ return "97. Interleaving String";}

    render(){
        const {code, explain, subjcet} = this.state;
        return (
            <Template code={code} explain={explain} title={Interleaving.title()} id={this.props.id} subjcet={subjcet} difficulty="Hard"/>
        );
    }
}

