//76. Minimum Window Substring

// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// For example,
// S = "ADOBECODEBANC"
// T = "ABC"
// Minimum window is "BANC".

// Note:
// If there is no such window in S that covers all characters in T, return the empty string "".

// If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
import React from "react";
import Template from "./Template";
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(source, target) {
    let map = {}, start = 0, end = 0, counter = target.length, min = Infinity, minStart = start;
    for(let i=0; i<counter; i++){
        if(!map[target.charAt(i)]) map[target.charAt(i)] = 0;
        map[target.charAt(i)] ++;
    }
    while(end < source.length){
        if(!map[source.charAt(end)]){
            map[source.charAt(end)] = 0;   
        }else if(map[source.charAt(end)]>0) counter--;
        map[source.charAt(end)]--;
        end++;

        while(counter === 0){
            if(end - start < min){
                min = end - start;
                minStart = start;
            }
            map[source.charAt(start)]++;
            if (map[source.charAt(start)] > 0)
                counter++;
            start++;
        }
    }
    if (isFinite(min))
        return source.substr(minStart, min);
    return "";
};

export default class ClassName extends React.Component{
    constructor(){
        super();
        this.state = {
            code: `var minWindow = function(source, target) {
    let map = {}, start = 0, end = 0, counter = target.length, min = Infinity, minStart = start;
    for(let i=0; i<counter; i++){
        if(!map[target.charAt(i)]) map[target.charAt(i)] = 0;
        map[target.charAt(i)] ++;
    }
    while(end < source.length){
        if(!map[source.charAt(end)]){
            map[source.charAt(end)] = 0;   
        }else if(map[source.charAt(end)]>0) counter--;
        map[source.charAt(end)]--;
        end++;

        while(counter === 0){
            if(end - start < min){
                min = end - start;
                minStart = start;
            }
            map[source.charAt(start)]++;
            if (map[source.charAt(start)] > 0)
                counter++;
            start++;
        }
    }
    if (isFinite(min))
        return source.substr(minStart, min);
    return "";
};`,
            explain:`1. Use two pointers: start and end to represent a window.\n
2. Move end to find a valid window.\n
3. When a valid window is found, move start to find a smaller window.\n`
        }
    }

    render(){
        const {code, explain} = this.state;
        return <Template code={code} explain={explain} title="76. Minimum Window Substring" id={this.props.id} difficulty="Hard"/>
    }
}