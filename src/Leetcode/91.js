// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.
import React from "react";
import Template from "../Leetcode/Template";

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s){
    let  chars = s.split(""), preTwo = 1, preOne = 1;
    if(chars.length === 0 ||+chars[0] ===0) return 0;
    for(let i=1; i<chars.length; i++){
        if(+chars[i] === 0) preOne = 0;
        let temoOne = preOne;
        if( i>0 && +(chars[i-1]+chars[i])<=26){
            preOne = preOne + preTwo;
        }
        preTwo = temoOne;

    }
    return preOne;
};

export default class DecodeWays extends React.Component{
    constructor(){
        super();
        this.state = {
            code:`
var numDecodings = function(s){
    let  chars = s.split(""), preTwo = 1, preOne = 1;
    if(chars.length === 0 ||+chars[0] ===0) return 0;
    for(let i=1; i<chars.length; i++){
        if(+chars[i] === 0) preOne = 0;
        let temoOne = preOne;
        if( i>0 && +(chars[i-1]+chars[i])<=26){
            preOne = preOne + preTwo;
        }
        preTwo = temoOne;

    }
    return preOne;
};`,
            description:'Assume that we have already resolved [0...n]\'s solution, and calculating [0...n+1]\'s solution: '
        };
    }

    render(){
        const {code, description} = this.state;
        return (
            <Template code={code} explain={description} title="91. Decode Ways" id={this.props.id}></Template>
        );
    }
}