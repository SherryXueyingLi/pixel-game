import React from "react";
import Template from "../Template";

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = { 
            subject:`Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

For example, given s = \`"aab"\`,
Return

    [
        ["aa","b"],
        ["a","a","b"]
    ]`,
             code: `/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let rt = [];
    processPartition(rt, [], s);
    return rt;
};

var processPartition = function(rtArray, currentArray, targetStr){
    if(targetStr.length===0){
        rtArray.push(currentArray);
        return;
    }
    for(let i=0; i<targetStr.length; i++){
        if(isPalindrome(targetStr.substr(0, i+1))){
            processPartition(rtArray, currentArray.concat(targetStr.substr(0, i+1)), targetStr.substr(i+1));
        }
    }
};

var isPalindrome = function(s){
    for(let i=0; i<s.length/2; i++){
        if(s.charAt(i) != s.charAt(s.length-i-1)) return false;
    }
    return true;
}`,
            explain:`Check the code.`          
        }
    }

    static title(){ return "131. Palindrome Partitioning";}

    render(){
        const {code, explain, subject} = this.state;
        return <Template code={code} explain={explain} title={ClassName.title()} id={this.props.id} difficulty="Medium" subject={subject}/>
    }
}