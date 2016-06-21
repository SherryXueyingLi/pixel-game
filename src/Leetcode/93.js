// Given a string containing only digits, restore it by returning all possible valid IP address combinations.

// For example:
// Given "25525511135",

// return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
import React from "react";
import Template from "./Template";

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let rt = [];
    parseHelper([], s, rt);
    return rt;
};


var parseHelper = function(proAry, restString,  rt){
    if(proAry.length ===3) {
        if(restString.length>0 && +restString <256 && !(restString.charAt(0) === '0' && restString.length>1)) {
            rt.push(proAry.concat(restString).join("."));
        }
    }else if(restString.charAt(0) === '0'){
        parseHelper(proAry.concat('0'), restString.substring(1), rt);
    }else{
        for(let i=0; i<3; i++){
            if(+restString.substring(0, i+1) < 256) {
                parseHelper(proAry.concat(restString.substring(0, i+1)), restString.substring(i+1), rt);
            }
        }
    }
};

export default class  RestoreIPAddresses extends React.Component{
    constructor(){
        super();
        this.state = {
            code:`
var restoreIpAddresses = function(s) {
    let rt = [];
    parseHelper([], s, rt);
    return rt;
};


var parseHelper = function(proAry, restString,  rt){
    if(proAry.length ===3) { //Situation 1.
        if(restString.length>0 && +restString <256 && !(restString.charAt(0) === '0' && restString.length>1)) {
            rt.push(proAry.concat(restString).join("."));
        }
    }else if(restString.charAt(0) === '0'){ //Situation 2.
        parseHelper(proAry.concat('0'), restString.substring(1), rt); 
    }else{ //Situation 3.
        for(let i=0; i<3; i++){
            if(+restString.substring(0, i+1) < 256) {
                parseHelper(proAry.concat(restString.substring(0, i+1)), restString.substring(i+1), rt);
            }
        }
    }
};
`,
explain: `
Suppose We already processed string[0...m], an array[] contains the valided IP code, TODO:  process the left string [m+1...n]\n
Let's take "010010" for instance, 
 \n
1. Start from end situation: \n **Suppose we Processed '0100', left '10', the alreay processed array is [0, 10, 0].**\n
We found that **array.length ===3** , so we just consider if the left string is an valid ID address section. \n
Convert the string to number. The legal processed number is [0-255], \n
Note:  the legal string can only start with '0' when the section is 0.
So if the left number is **0** but the string length is more than one, it is illegal. Give up this path.\n
\n
2. To Consider the special situation: The first String of left is '0': \n
**Suppose we processed "010", the array is ["0", "10"], we left "010" to process and found it start with "0"**\n
In this case, we have no choice but put '0' into the array and go on processing. \n
\n
3. In general case, we are going to consider the next 3 chars as three numbers, for instance:
**Suppose we processed "0", the array is ["0"], we left "10010" to process.**\n
In this case, we have to consider the next number is "1", "10", "100", so we set an loop here and process by considering if the number is legal.
`
        }
    }

    render(){
        const {code, explain} = this.state;
        return (
            <Template code = {code} explain = {explain} title="93. Reverse Linked List II" id={this.props.id}/>
        );
    }
}