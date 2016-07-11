import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`The string \`"PAYPALISHIRING"\` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\n

    P   A   H   N
    A P L S I I G
    Y   I   R
And then read line by line: \`"PAHNAPLSIIGYIR"\` \n
Write the code that will take a string and make this conversion given a number of rows: \n

    string convert(string text, int nRows); \n
\`convert("PAYPALISHIRING", 3)\` should return \`"PAHNAPLSIIGYIR"\`.`,
             code: `/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1) return s;
    let rt=[], increase = 2*numRows-2;
    for(let i=0; i<numRows; i++){
        rt.push (s.charAt(i)); 
        if(i===0 || i=== numRows-1){
            let index = i+increase;
            while(index < s.length){
                rt.push(s.charAt(index));
                index = index+increase;
            }
        }else{
            let index = i+increase;
            while(index-2*i < s.length){
                rt.push(s.charAt(index-2*i));
                if(index < s.length) rt.push(s.charAt(index));
                index = index+increase;
            }
            
        }
    }
    return rt.join("");
};`,
            explain:`If we look it closely, we could find that the converted string include 2 parts, the first and last row has same pattern, and the rows in middle has same patter.\n
If we use n=6 as an example and see if we could observe the pattern:
    0 step=10       20       30 
    1    9 11    19 21    29 31
    2   8  12   18  22   28  32
    3  7   13  17   23  27
    4 6    14 16    24 26
    5      15       25

We could found that in \`i=0 and i=n-1\`, the increase step is \`step=10\`. In the middle of the rows, the pattern is \`[i, i+step-i, i+step, i+2*step-i, i+2*step, ....]\`.\n
So the only thing we need to find, is what is the formular of the step?   \n 

See if n>=2, we know that from rop to bottom row, we need to go through (n-1) numbers(which is 0...5 in this case), \n
from bottom, we need to go through (n-1) numbers too includeing the bottom and top number(which is 5...10), so when we reach 10, we actually, \n
so we know bottom - top = n-1, step - bottom = n-1, \n
Then \`step-top = 2*n-2.\`\n

But for n===1, we know  that top row is bottom row, the pattern couldn't work, but luckly, we dont need to find a pattern for it, since it zigzag string must be itself.\n`          
        }
    }

    static title(){ return "6. ZigZag Conversion";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Easy" subject={subject}/>
    }
}